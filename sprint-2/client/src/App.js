import React, { Component } from "react";
import "./styles/App.css";
import Nav from "./components/Nav.js";
import Upload from "./components/Upload.js";
import Main from "./components/Main.js";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";

import loadAnimation from "./assets/animation/bf.gif";
import vidLoading from "./assets/animation/vidBF.gif";
const apiKey = "?api_key=c03185ad-ce89-4771-aa63-e418f96376b0";
const apiUrl = "https://project-2-api.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      mainVideo: {},
      isLoading: true,
      firstLoad: true,
      currentId: this.props.location.pathname.substring(8),
      whichLoad: loadAnimation,
      currentUser: {
        name: "Mohan Muruge",
        image: "../assets/Images/Mohan-muruge.jpg"
      }
    };
  }

  componentDidMount() {
    if (this.state.currentId === "") {
      this.renderData("1af0jruup5gu");
    } else {
      this.renderData(this.state.currentId);
    }
  }

  renderData(id) {
    setTimeout(
      () =>
        axios.all(
          [
            axios.get(`${apiUrl}/videos${apiKey}`).then(response => {
              this.setState({
                videos: response.data
              });
            })
          ],

          [
            axios.get(`${apiUrl}/videos/${id}${apiKey}`).then(response =>
              this.setState({
                mainVideo: response.data,
                currentId: response.data.id,
                isLoading: false,
                firstLoad: false
              })
            )
          ]
        ),
      2750
    );
  }

  renderNewVideo = id => {
    this.setState({
      isLoading: true,
      whichLoad: vidLoading
    });
    setTimeout(
      () =>
        axios.get(`${apiUrl}/videos/${id}${apiKey}`).then(response => {
          this.setState({
            mainVideo: response.data,
            isLoading: false,
            currentId: response.data.id,
            whichLoad: ""
          });
        }),
      1500
    );
  };

  pushComment = comment => {
    axios
      .post(
        `${apiUrl}/videos/${this.state.currentId}/comments${apiKey}`,
        comment
      )
      .then(response => {
        axios
          .get(`${apiUrl}/videos/${this.state.currentId}${apiKey}`)
          .then(response => {
            this.setState({
              mainVideo: response.data
            });
          });
      });
  };

  render() {
    return (
      <div>
        <Nav />
        {this.state.isLoading ? (
          <div class="loading">
            <img src={this.state.whichLoad} />
          </div>
        ) : (
          <Switch>
            <Route path="/upload" exact component={Upload} />

            <Route
              path="/videos/:id"
              render={props => {
                const findVideo = this.state.videos.find(video => {
                  return (
                    video.id.toLowerCase() ===
                    props.match.params.id.toLowerCase()
                  );
                });

                return (
                  <Main
                    vidInfo={this.state.mainVideo}
                    vidList={this.state.videos}
                    pushComment={this.pushComment}
                    commentCounter={this.state.commentCounter}
                    currentId={props.match.params.id}
                    renderNewVid={this.renderNewVideo}
                    renderData={this.renderData}
                    currentUser={this.state.currentUser}
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
                    vidInfo={this.state.mainVideo}
                    vidList={this.state.videos}
                    pushComment={this.pushComment}
                    commentCounter={this.state.commentCounter}
                    currentId={"1af0jruup5gu"}
                    renderNewVid={this.renderNewVideo}
                    renderData={this.renderData}
                    currentUser={this.state.currentUser}
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
