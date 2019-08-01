import React from "react";
import { Link } from "react-router-dom";

export default function Next(props) {
  return (
    <div className="main__next">
      <h5 className="next-title">Next Video</h5>
      <CreateNextVid
        vidList={props.vidList}
        currentId={props.currentId}
        renderNewVid={props.renderNewVid}
      />
    </div>
  );
}

function CreateNextVid(props) {
  const filterCurrentVid = props.vidList.filter(
    obj => obj.id !== props.currentId
  );
  const createCard = filterCurrentVid.map(obj => {
    return (
      <Link to={`/videos/${obj.id}`} key={obj.id}>
        <section className="next">
          <div className="next__thumbnail">
            <img
              src={obj.image}
              className="next__thumbnail--pic"
              alt={obj.title + "-thumbnail-image"}
            />
          </div>
          <div className="next__info">
            <h5 className="next__info--title">{obj.title}</h5>
            <p className="next__info--channel">{obj.channel}</p>
          </div>
        </section>
      </Link>
    );
  });

  return createCard;
}
