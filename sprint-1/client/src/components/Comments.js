import React from "react";

import ProfilePic from "../assets/Images/Mohan-muruge.jpg";

export default function Comments(props) {
  return (
    <div className="comment">
      <CommentCounter vidInfo={props.vidInfo} />
      <CommentForm />
      <EachComment comment={props.vidInfo.comments} />
    </div>
  );
}

function CommentCounter(props) {
  let numComments = props.vidInfo.comments.length;
  let commentCounter = numComments + " Comments";

  return <h3 className="comment__counter">{commentCounter}</h3>;
}

function CommentForm() {
  return (
    <div className="comment__body">
      <img src={ProfilePic} className="comment__profile-pic" />
      <CommentMessage />
    </div>
  );
}

function CommentMessage() {
  return (
    <div className="comment__message">
      <p className="comment__title"> JOIN THE CONVERSATION</p>

      <form className="comment__form">
        <textarea
          type="text"
          name="fname"
          className="comment__write"
          placeholder="Add a new comment"
          wrap="soft"
          required
        />
        <button className="comment__button">COMMENT</button>
      </form>
    </div>
  );
}

function EachComment(props) {
  // const commentList = props.comment.map()
  const timestamp = time => {
    const convertDate = new Date(time);
    const properMonth = convertDate.getMonth() + 1;
    const properDate = convertDate.getDate() + 1;
    const timestamp =
      properMonth + "/" + properDate + "/" + convertDate.getFullYear();
    return timestamp;
  };
  const commentContentList = props.comment.map(obj => {
    return (
      <card className="thread__response">
        <img className="thread__profile--pic" src={ProfilePic} />
        <div className="thread__content">
          <div className="thread__user">
            <p className="thread__user--name">{obj.name}</p>
            <p className="thread__user--date">{timestamp(obj.timestamp)}</p>
          </div>
          <p className="thread__comment">{obj.comment}</p>
        </div>
      </card>
    );
  });

  return <div className="thread">{commentContentList}</div>;
}

// class LoadComments extends Component {
//   render() {
//     return <div />;
//   }
// }
