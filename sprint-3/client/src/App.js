import React, { Component } from "react";
import "./styles/App.css";
import Nav from "./components/Nav.js";
import Upload from "./components/Upload.js";
import Main from "./components/Main.js";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";

import loadAnimation from "./assets/animation/bf.gif";
import vidLoading from "./assets/animation/vidBF.gif";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      mainVideo: {},
      isLoading: true,
      firstLoad: true,
      currentId: "",
      whichLoad: loadAnimation,
      currentUser: {
        name: "Mohan Muruge",
        image: "../assets/Images/Mohan-muruge.jpg"
      }
    };
  }

  componentDidMount() {
    localStorage.setItem("initId", "1af0jruup5gu");
    if (this.state.currentId === "") {
      this.renderData(localStorage["initId"]);
    } else {
      this.renderData(this.state.currentId);
    }
  }

  renderData = id => {
    setTimeout(
      () =>
        axios.all(
          [
            axios.get(`/videos`).then(response => {
              this.setState({
                videos: response.data
              });
            })
          ],

          [
            axios.get(`/videos/${id}`).then(response => {
              this.setState({
                mainVideo: response.data,
                currentId: response.data.id,
                isLoading: false,
                firstLoad: false
              });
            })
          ]
        ),
      2000
    );
  };

  renderNewVideo = id => {
    this.setState({
      isLoading: true,
      whichLoad: vidLoading
    });
    setTimeout(
      () =>
        axios.get(`/videos/${id}`).then(response => {
          this.setState({
            mainVideo: response.data,
            isLoading: false,
            currentId: response.data.id,
            whichLoad: ""
          });
        }),
      500
    );
  };

  pushComment = comment => {
    axios.post(`/videos/${this.state.currentId}/comments`, comment).then(() => {
      axios.get(`/videos/${this.state.currentId}`).then(response => {
        this.setState({
          mainVideo: response.data
        });
      });
    });
  };

  addVideo = video => {
    axios.post("/videos/upload", video).then(response => {
      axios.get(`/videos`).then(response => {
        this.setState({
          videos: response.data
        });
      });
    });
  };

  deleteComment = id => {
    axios.delete(`/videos/${this.state.currentId}/comments/${id}`).then(() => {
      axios.get(`/videos/${this.state.currentId}`).then(response => {
        this.setState({
          mainVideo: response.data,
          currentId: response.data.id
        });
      });
    });
  };

  render() {
    let { mainVideo, videos, currentUser } = this.state;

    return (
      <div>
        <Nav />
        {this.state.isLoading ? (
          <div className="loading">
            <img src={this.state.whichLoad} alt="loading-animation" />
          </div>
        ) : (
          <Switch>
            <Route
              path="/upload"
              exact
              render={props => {
                return <Upload addVideo={this.addVideo} {...props} />;
              }}
            />

            <Route
              path="/videos/:id"
              render={props => {
                return (
                  <Main
                    mainVideo={mainVideo}
                    videos={videos}
                    pushComment={this.pushComment}
                    currentId={props.match.params.id}
                    renderNewVid={this.renderNewVideo}
                    renderData={this.renderData}
                    currentUser={currentUser}
                    deleteComment={this.deleteComment}
                  />
                );
              }}
            />
            <Route
              path={["/", "/videos"]}
              exact
              render={() => {
                return (
                  <Main
                    mainVideo={mainVideo}
                    videos={videos}
                    pushComment={this.pushComment}
                    currentId={localStorage["initId"]}
                    renderNewVid={this.renderNewVideo}
                    renderData={this.renderData}
                    currentUser={currentUser}
                    deleteComment={this.deleteComment}
                  />
                );
              }}
            />
          </Switch>
        )}
      </div>
    );
  }
}

export default withRouter(App);
