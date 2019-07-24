import React from "react";

import ProfilePic from "../assets/Images/Mohan-muruge.jpg";

export default function Comments(props) {
  return (
    <div className="comment">
      <CommentCounter vidInfo={props.vidInfo} />
      <CommentForm />
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

function EachComment() {
  // const commentList = props.comment.map()
  return <div />;
}

// class LoadComments extends Component {
//   render() {
//     return <div />;
//   }
// }
