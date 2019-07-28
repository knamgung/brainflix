import React from "react";

export default function MainVideo(props) {
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
