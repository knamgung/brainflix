import React, { Component } from "react";
import VideoHeader from "./VideoHeader.js";
import Comments from "./Comments.js";
import Next from "./Next.js";
import axios from "axios";
import { Route } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentId !== prevProps.currentId) {
      this.props.renderNewVid(this.props.currentId);
      // axios
      //   .get(
      //     `https://project-2-api.herokuapp.com/videos/${
      //       this.props.currentId
      //     }?api_key="123`
      //   )
      //   .then(response => this.props.renderNewVid(response));
    }
  }

  render() {
    return (
      <main className="home">
        <MainVideo
          vidInfo={this.props.vidInfo}
          currentId={this.props.currentId}
        />
        <div className="main">
          <MainInfo
            vidInfo={this.props.vidInfo}
            pushComment={this.props.pushComment}
            commentCounter={this.props.commentCounter}
            currentUser={this.props.currentUser}
          />
          <Next
            vidList={this.props.vidList}
            currentId={this.props.currentId}
            renderNewVid={this.props.renderNewVid}
          />
        </div>
      </main>
    );
  }
}

function MainInfo(props) {
  return (
    <div className="main__info">
      <VideoHeader vidInfo={props.vidInfo} />
      <Comments
        vidInfo={props.vidInfo}
        pushComment={props.pushComment}
        commentCounter={props.commentCounter}
        currentUser={props.currentUser}
      />
    </div>
  );
}

function MainVideo(props) {
  let videoLink = props.vidInfo.video + "/?api_key=" + props.currentId;

  return (
    <div className="video">
      <video controls poster={props.vidInfo.image} className="video__player">
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>
  );
}
