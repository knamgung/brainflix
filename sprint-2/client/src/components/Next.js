import React from "react";

export default function Next(props) {
  return (
    <div>
      <h5 className="next-title">Next Video</h5>
      <CreateNextVid vidList={props.vidList} />
    </div>
  );
}

function CreateNextVid(props) {
  const createCard = props.vidList.map((obj, i) => {
    return (
      <section className="next" key={i + "-next-video"}>
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
    );
  });

  return createCard;
}
