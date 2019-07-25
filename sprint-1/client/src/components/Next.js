import React from "react";

export default function Next(props) {
  return (
    <div>
      <CreateNextVid vidList={props.vidList} />
    </div>
  );
}

function CreateNextVid(props) {
  const createCard = props.vidList.map(obj => {
    return (
      <card className="next">
        <img src={obj.image} className="next__thumbnail" />
        <div className="next__info">
          <h5 className="next__info--title">{obj.title}</h5>
          <p className="next__info--channel">{obj.channel}</p>
        </div>
      </card>
    );
  });

  return createCard;
}
