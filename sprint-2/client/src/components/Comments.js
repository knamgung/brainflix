import React, { Component } from "react";

import ProfilePic from "../assets/Images/Mohan-muruge.jpg";
import AnonPic from "../assets/Images/anonymous.jpg";

export default function Comments({ mainVideo, pushComment, currentUser }) {
  return (
    <div className="comment">
      <CommentCounter mainVideo={mainVideo} />
      <CommentForm
        pushComment={pushComment}
        mainVideo={mainVideo}
        currentUser={currentUser}
      />
      <EachComment comments={mainVideo.comments} currentUser={currentUser} />
    </div>
  );
}

function CommentCounter({ mainVideo }) {
  let commentCount = mainVideo.comments.length + " Comments";
  return <h3 className="comment__counter">{commentCount}</h3>;
}

function CommentForm({ pushComment, mainVideo, currentUser }) {
  return (
    <div className="comment__body">
      <div className="comment__profile">
        <img
          src={ProfilePic}
          className="comment__profile--pic"
          alt="profile-pic"
        />
      </div>
      <CommentMessage
        pushComment={pushComment}
        mainVideo={mainVideo}
        currentUser={currentUser}
      />
    </div>
  );
}

class CommentMessage extends Component {
  state = {
    name: this.props.currentUser.name,
    comment: null
  };

  handleComment = event => {
    this.setState({
      comment: event.target.value
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

      this.props.pushComment(this.state, this.props.mainVideo.comments);
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

function commentPic(user, commentName) {
  if (user.name === commentName) {
    return user.image;
  } else {
    return AnonPic;
  }
}

class EachComment extends Component {
  state = {
    display: "none",
    color: "red",
    fontWeight: "500",
    fontSize: "0.75em",
    paddingLeft: "0.5em"
  };

  displayDelete(id, comments) {
    const idMatch = comments.find(comment => {
      return id === comment.id;
    });

    this.setState({
      display: "initial"
    });
  }

  render() {
    const timestamp = time => {
      const convertDate = new Date(time);
      const properMonth = convertDate.getMonth() + 1;
      const properDate = convertDate.getDate();
      const timestamp =
        properMonth + "/" + properDate + "/" + convertDate.getFullYear();
      return timestamp;
    };

    let commentContentList = this.props.comments
      .slice()
      .reverse()
      .map((obj, i) => {
        return (
          <section
            className="thread__response"
            key={obj.id}
            onMouseEnter={() => {
              this.displayDelete(obj.id, commentContentList);
            }}
          >
            <div className="thread__profile">
              <img
                className="thread__profile--pic"
                src={commentPic(this.props.currentUser, obj.name)}
                alt={obj.name + "-profile-pic"}
              />
            </div>

            <div className="thread__content">
              <div className="thread__user">
                <p className="thread__user--name">
                  {obj.name}
                  <span style={this.state}>Delete Comment</span>
                </p>
                <p className="thread__user--date">{timestamp(obj.timestamp)}</p>
              </div>
              <p className="thread__comment">{obj.comment}</p>
            </div>
          </section>
        );
      });

    return <div className="thread">{commentContentList}</div>;
  }
}
