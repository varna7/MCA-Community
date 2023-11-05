import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./CollegeProfile.scss";
import { Link } from "react-router-dom";

const CollegeProfile = () => {
  return (
    <div className="college-profile">
      <div className="images">
        <img
          src="https://www.cet.ac.in/wp-content/uploads/2018/10/p58-1024x344.jpg"
          alt=""
          className="coverImg"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/6/6b/Cet_emblem.jpg"
          alt=""
          className="logoImg"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
            <div className="clgInfo">
            <span className="clgName ">College of Engineering, Trivandrum</span>
          <div className="item">
            <PlaceIcon />
            <span>Thiruvanathapuram, Kerala, India</span>
          </div>
            </div>
          
          <div className="details px-5">
            <div className="left">
              <a href="https://www.cet.ac.in/">
                <LanguageIcon />
              </a>
              <a href="https://www.linkedin.com/school/college-of-engineering-trivandrum/">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
            <div className="center">
              <button>follow</button>
            </div>
            <div className="right">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className="clg-profile-nav">
          <hr />
          <div className="clg-nav">
            <Link to ="/college-profile"><span className="nav-item">About</span></Link>
            <Link to="/college-profile/posts"><span className="nav-item">Posts</span></Link>
            <Link to="/college-profile/placements"><span className="nav-item">Placements</span></Link>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CollegeProfile;
