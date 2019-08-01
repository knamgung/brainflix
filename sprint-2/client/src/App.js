import React, { Component } from "react";
import "./styles/App.css";
import Nav from "./components/Nav.js";
import Upload from "./components/Upload.js";
import Main from "./components/Main.js";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      mainVideo: {},
      isLoading: true,
      currentId: this.props.location.pathname.substring(8)
    };
  }

  componentDidMount() {
    if (this.state.currentId === "") {
      this.renderData("1af0jruup5gu");
    } else {
      this.renderData(this.state.currentId);
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.match);
  //   if (this.state.currentId !== this.props.match.params.id) {
  //     axios
  //       .get(
  //         `https://project-2-api.herokuapp.com/videos/${
  //           this.state.currentId
  //         }?api_key="123`
  //       )
  //       .then(response =>
  //         this.setState({
  //           mainVideo: response.data
  //         })
  //       );
  //   }
  // }

  renderData(id) {
    axios.all(
      [
        axios
          .get('https://project-2-api.herokuapp.com/videos?api_key="123')
          .then(response => {
            this.setState({
              videos: response.data
            });
          })
      ],

      [
        axios
          .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key="123`)
          .then(response =>
            this.setState({
              mainVideo: response.data,
              currentId: response.data.id,
              isLoading: false
            })
          )
      ]
    );
  }

  renderNewVideo = id => {
    this.setState({
      isLoading: true
    });
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key="123`)
      .then(response => {
        this.setState({
          mainVideo: response.data,
          isLoading: false,
          currentId: response.data.id
        });
      });
  };

  pushComment = comment => {
    let mainVideo = this.state.mainVideo;
    this.state.mainVideo.comments.push(comment);

    this.setState({
      mainVideo: mainVideo
    });
  };

  render() {
    return (
      <div>
        <Nav />
        {this.state.isLoading ? (
          <h1>Loading</h1>
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
