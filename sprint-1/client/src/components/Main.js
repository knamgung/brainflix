import React from "react";
import VideoHeader from "./VideoHeader.js";
import Comments from "./Comments.js";
import Next from "./Next.js";

export default function Main(props) {
  return (
    <main className="main">
      <MainInfo
        vidInfo={props.vidInfo}
        pushComment={props.pushComment}
        commentCounter={props.commentCounter}
      />
      <Next vidList={props.vidList} />
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
