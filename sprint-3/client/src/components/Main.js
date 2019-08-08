import React, { Component } from "react";
import VideoHeader from "./VideoHeader.js";
import Comments from "./Comments.js";
import Next from "./Next.js";

export default class Main extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentId !== prevProps.currentId) {
      this.props.renderNewVid(this.props.currentId);
    }
  }

  render() {
    let {
      currentId,
      mainVideo,
      videos,
      currentUser,
      pushComment,
      deleteComment
    } = this.props;

    return (
      <main className="home">
        <MainVideo mainVideo={mainVideo} currentId={currentId} />
        <div className="main">
          <MainInfo
            deleteComment={deleteComment}
            mainVideo={mainVideo}
            pushComment={pushComment}
            currentUser={currentUser}
          />
          <Next videos={videos} currentId={currentId} />
        </div>
      </main>
    );
  }
}

function MainInfo({ mainVideo, pushComment, currentUser, deleteComment }) {
  return (
    <div className="main__info">
      <VideoHeader mainVideo={mainVideo} />
      <Comments
        deleteComment={deleteComment}
        mainVideo={mainVideo}
        pushComment={pushComment}
        currentUser={currentUser}
      />
    </div>
  );
}

function MainVideo({ mainVideo, currentId }) {
  const { video, image } = mainVideo;
  let videoLink = video + "/?api_key=" + currentId;

  return (
    <div className="video">
      <video controls poster={image} className="video__player">
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>
  );
}
