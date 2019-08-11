import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Upload extends Component {
  render() {
    let thumbnail = "./assets/Images/thumbnail.jpg";
    return (
      <div className="upload">
        <h2 className="upload__head">Upload Video</h2>

        <div className="upload__body">
          <UploadThumbnail thumbnail={thumbnail} />
          <UploadInfo addVideo={this.props.addVideo} {...this.props} />
        </div>
      </div>
    );
  }
}

const UploadThumbnail = props => {
  return (
    <div className="upload__thumbnail">
      <h5 className="upload__thumbnail--title">VIDEO THUMBNAIL</h5>
      <div className="upload__thumbnail-wrap">
        <img
          src={props.thumbnail}
          alt="thumbnail"
          className="upload__thumbnail--img"
        />
      </div>
    </div>
  );
};

class UploadInfo extends Component {
  state = {
    title: "",
    description: ""
  };

  createVid = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  uploadVid = event => {
    event.preventDefault();
    this.props.addVideo(this.state);
    event.target.reset();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="upload__info">
        <form className="upload__form" onSubmit={this.uploadVid}>
          <div className="upload__title">
            <h5 className="upload__title--title">TITLE YOUR VIDEO</h5>
            <input
              type="text"
              id="title"
              className="upload__title-write"
              onChange={this.createVid}
              placeholder="Add a title to your video"
              required
            />
          </div>

          <div className="upload__desc">
            <h5 className="upload__desc--title">ADD A VIDEO DESCRIPTION</h5>
            <textarea
              type="text"
              className="upload__desc-write"
              placeholder="Add a description your video"
              id="description"
              onChange={this.createVid}
              required
            />
          </div>
          <div className="upload__cta">
            <button className="upload__publish">PUBLISH</button>

            <Link to="/">
              <h4 className="upload__cancel">CANCEL</h4>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
