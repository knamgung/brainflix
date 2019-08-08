import React from "react";
import Heart from "../assets/Icons/SVG/Icon-likes.svg";
import Views from "../assets/Icons/SVG/Icon-views.svg";

export default function VideoHeader({ mainVideo }) {
  const { title } = mainVideo;

  return (
    <div className="vid-head">
      <h1 className="vid-head__title">{title}</h1>
      <VideoInfo mainVideo={mainVideo} />
      <VideoDescription mainVideo={mainVideo} />
    </div>
  );
}

function VideoInfo({ mainVideo }) {
  const { channel, timestamp } = mainVideo;
  const author = `By ${channel}`;
  const convertDate = new Date(timestamp);
  const properMonth = convertDate.getMonth() + 1;
  const properDate = convertDate.getDate() + 1;
  const vidDate =
    properMonth + "/" + properDate + "/" + convertDate.getFullYear();

  return (
    <div className="video__info">
      <div className="info">
        <h5 className="info__author">{author}</h5>
        <p className="info__date">{vidDate}</p>
      </div>
      <ViewsLikes mainVideo={mainVideo} />
    </div>
  );
}

function VideoDescription({ mainVideo }) {
  const { description } = mainVideo;

  return (
    <div className="desc">
      <p className="desc__body">{description}</p>
    </div>
  );
}

function ViewsLikes({ mainVideo }) {
  const { likes, views } = mainVideo;

  return (
    <div className="stats">
      <div className="views">
        <img src={Views} className="views__icon" alt="views-icon" />
        <p className="views__counter">{views}</p>
      </div>
      <div className="likes">
        <img src={Heart} className="likes__icon" alt="likes-icon" />
        <p className="likes__counter">{likes}</p>
      </div>
    </div>
  );
}
