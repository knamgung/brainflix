import React from "react";
import { Link } from "react-router-dom";

export default function Next({ videos, currentId }) {
  return (
    <div className="main__next">
      <h5 className="next-title">Next Video</h5>
      <CreateNextVid videos={videos} currentId={currentId} />
    </div>
  );
}

function CreateNextVid({ videos, currentId }) {
  const filterCurrentVid = videos.filter(obj => obj.id !== currentId);
  const createCard = filterCurrentVid.map(obj => {
    let { id, image, title, channel } = obj;
    return (
      <Link to={`/videos/${id}`} key={id}>
        <section className="next">
          <div className="next__thumbnail">
            <img
              src={image}
              className="next__thumbnail--pic"
              alt={title + "-thumbnail-image"}
            />
          </div>
          <div className="next__info">
            <h5 className="next__info--title">{title}</h5>
            <p className="next__info--channel">{channel}</p>
          </div>
        </section>
      </Link>
    );
  });

  return createCard;
}
