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
        <img src={Views} className="views__icon" />
        <p className="views__counter">{viewNum}</p>
      </div>
      <div className="likes">
        <img src={Heart} className="likes__icon" />
        <p className="likes__counter">{likes}</p>
      </div>
    </div>
  );
}

// const numFormatter = strNum => {
//   const numCommas = strNum.length / 3;
//   const numExtra = strNum.length % 3;
//   const iteration = strNum.length;
//   let changedNum = "";

//   console.log(iteration);

//   if (strNum.length > 3) {
//     for (let i = iteration; i > 0; i = i - 1) {
//       if ((iteration - i) % 3 === 0 && (iteration - i) % 3 > 0) {
//         changedNum = "," + strNum.substring(i - 3, i) + changedNum;
//         i -= 2;
//       } else {
//         changedNum = strNum.substring(i - 1, i) + changedNum;
//       }
//       console.log(i);
//       return changedNum;
//     }
//   }
// };
