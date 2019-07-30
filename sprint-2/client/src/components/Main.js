import React from "react";
import VideoHeader from "./VideoHeader.js";
import Comments from "./Comments.js";
import Next from "./Next.js";

export default function Main(props) {
  return (
    <main className="home">
      <MainVideo video={props.vidInfo} />
      <div className="main">
        <MainInfo
          vidInfo={props.vidInfo}
          pushComment={props.pushComment}
          commentCounter={props.commentCounter}
        />
        <Next vidList={props.vidList} />
      </div>
    </main>
  );
}

function MainInfo(props) {
  return (
    <div className="main__info">
      <VideoHeader vidInfo={props.vidInfo} />
      <Comments
        vidInfo={props.vidInfo}
        pushComment={props.pushComment}
        commentCounter={props.commentCounter}
      />
    </div>
  );
}

function MainVideo(props) {
  return (
    <div className="video">
      <video
        controls
        poster="./assets/Images/video-list-0.jpgcd "
        className="video__player"
      >
        <source src={props.video.video} type="video/mp4" />
      </video>
    </div>
  );
}
