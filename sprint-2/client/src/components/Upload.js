import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Upload extends Component {
  state = {
    thumbnail: "./assets/Images/thumbnail.jpg",
    title: null,
    description: null
  };
  render() {
    return (
      <div className="upload">
        <h2 className="upload__head">Upload Video</h2>

        <div className="upload__body">
          <UploadThumbnail thumbnail={this.state.thumbnail} />
          <UploadInfo />
        </div>
        <UploadCTA />
      </div>
    );
  }
}

const UploadThumbnail = props => (
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

const UploadInfo = props => (
  <div className="upload__info">
    <form className="upload__form">
      <div className="upload__title">
        <h5 className="upload__title--title">TITLE YOUR VIDEO</h5>
        <input
          type="text"
          className="upload__title-write"
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
          required
        />
      </div>
    </form>
  </div>
);

const UploadCTA = () => (
  <div className="upload__cta">
    <button className="upload__publish">PUBLISH</button>
    <Link to="/">
      <h4 className="upload__cancel">CANCEL</h4>
    </Link>
  </div>
);
