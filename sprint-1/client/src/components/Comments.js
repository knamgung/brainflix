import React, { Component } from "react";

import ProfilePic from "../assets/Images/Mohan-muruge.jpg";
import AnonPic from "../assets/Images/anonymous.jpg";

export default function Comments(props) {
  return (
    <div className="comment">
      <CommentCounter commentCounter={props.commentCounter} />
      <CommentForm pushComment={props.pushComment} vidInfo={props.vidInfo} />
      <EachComment comments={props.vidInfo.comments} />
    </div>
  );
}

function CommentCounter(props) {
  let commentCount = props.commentCounter + " Comments";
  return <h3 className="comment__counter">{commentCount}</h3>;
}

function CommentForm(props) {
  return (
    <div className="comment__body">
      <div className="comment__profile">
        <img
          src={ProfilePic}
          className="comment__profile--pic"
          alt="profile-pic"
        />
      </div>
      <CommentMessage pushComment={props.pushComment} vidInfo={props.vidInfo} />
    </div>
  );
}

class CommentMessage extends Component {
  state = {
    name: "Mohan Muruge",
    comment: null,
    id: null,
    likes: 0,
    timestamp: null
  };

  handleComment = event => {
    this.setState({
      comment: event.target.value,
      timestamp: Date.now(),
      id: Math.random()
    });
  };

  commentSubmit = event => {
    event.preventDefault();

    this.props.pushComment(this.state);
    event.target.reset();
  };

  submitEnter = event => {
    if (event.key === "Enter") {
      event.preventDefault();

      this.props.pushComment(this.state, this.props.vidInfo.comments);
      event.target.value = "";
    }
  };

  render() {
    return (
      <div className="comment__message">
        <p className="comment__title"> JOIN THE CONVERSATION</p>

        <form className="comment__form" onSubmit={this.commentSubmit}>
          <textarea
            type="text"
            name="fname"
            className="comment__write"
            placeholder="Add a new comment"
            wrap="soft"
            onChange={this.handleComment}
            onKeyDown={this.submitEnter}
            required
          />
          <button className="comment__button">COMMENT</button>
        </form>
      </div>
    );
  }
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

  let commentContentList = props.comments.map((obj, i) => {
    return (
      <section className="thread__response" key={i + "-comment"}>
        <div className="thread__profile">
          <img
            className="thread__profile--pic"
            src={AnonPic}
            alt={obj.name + "-profile-pic"}
          />
        </div>
        <div className="thread__content">
          <div className="thread__user">
            <p className="thread__user--name">{obj.name}</p>
            <p className="thread__user--date">{timestamp(obj.timestamp)}</p>
          </div>
          <p className="thread__comment">{obj.comment}</p>
        </div>
      </section>
    );
  });

  return <div className="thread">{commentContentList}</div>;
}
