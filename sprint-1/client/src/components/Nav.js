import React, { Component } from "react";
import logo from "../assets/Logo/Logo-brainflix.svg";
import IconUpload from "../assets/Icons/PNG/Icon-upload.png";
import ProfilePic from "../assets/Images/Mohan-muruge.jpg";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";

export default function Nav() {
  return (
    <nav className="navbar">
      <BrainflixLogo />
      <Searchbar />
      <UploadProfile />
    </nav>
  );
}

function BrainflixLogo() {
  return <img src={logo} alt={"brainflix-logo"} className="navbar__logo" />;
}

function Searchbar() {
  return (
    <form className="navbar__form">
      <input className="navbar__search" placeholder="Search" />
      <img src={searchIcon} className="navbar__search--icon" />
    </form>
  );
}

function UploadProfile() {
  return (
    <div className="navbar__upload">
      <button className="navbar__upload--button">
        <img src={IconUpload} /> UPLOAD
      </button>
      <div className="profile">
        <img src={ProfilePic} className="profile-pic" />
      </div>
    </div>
  );
}
