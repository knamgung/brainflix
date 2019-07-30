import React from "react";
import logo from "../assets/Logo/Logo-brainflix.svg";
import IconUpload from "../assets/Icons/PNG/Icon-upload.png";
import ProfilePic from "../assets/Images/Mohan-muruge.jpg";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <BrainflixLogo />
      </Link>
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
      <img
        src={searchIcon}
        className="navbar__search--icon"
        alt="search-icon"
      />
    </form>
  );
}

function UploadProfile() {
  return (
    <div className="navbar__upload">
      <button className="navbar__upload--button">
        <Link to="/upload">
          <img src={IconUpload} alt="upload-icon" />
          UPLOAD
        </Link>
      </button>

      <div className="profile">
        <img src={ProfilePic} className="profile-pic" alt="profile-pic" />
      </div>
    </div>
  );
}
