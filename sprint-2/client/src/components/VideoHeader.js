import React from "react";
import Heart from "../assets/Icons/SVG/Icon-likes.svg";
import Views from "../assets/Icons/SVG/Icon-views.svg";

export default function VideoHeader(props) {
  const vidTitle = props.vidInfo.title;

  return (
    <div className="vid-head">
      <h1 className="vid-head__title">{vidTitle}</h1>
      <VideoInfo vidInfo={props.vidInfo} />
      <VideoDescription vidInfo={props.vidInfo} />
    </div>
  );
}

function VideoInfo(props) {
  const author = `By ${props.vidInfo.channel}`;
  const convertDate = new Date(props.vidInfo.timestamp);
  const properMonth = convertDate.getMonth() + 1;
  const properDate = convertDate.getDate() + 1;
  const timestamp =
    properMonth + "/" + properDate + "/" + convertDate.getFullYear();

  return (
    <div className="video__info">
      <div className="info">
        <h5 className="info__author">{author}</h5>
        <p className="info__date">{timestamp}</p>
      </div>
      <ViewsLikes vidInfo={props.vidInfo} />
    </div>
  );
}

function VideoDescription(props) {
  const vidParagraph = props.vidInfo.description;

  return (
    <div className="desc">
      <p className="desc__body">{vidParagraph}</p>
    </div>
  );
}

function ViewsLikes(props) {
  const likes = props.vidInfo.likes;
  const viewNum = props.vidInfo.views;
  return (
    <div className="stats">
      <div className="views">
        <img src={Views} className="views__icon" alt="views-icon" />
        <p className="views__counter">{viewNum}</p>
      </div>
      <div className="likes">
        <img src={Heart} className="likes__icon" alt="likes-icon" />
        <p className="likes__counter">{likes}</p>
      </div>
    </div>
  );
}
