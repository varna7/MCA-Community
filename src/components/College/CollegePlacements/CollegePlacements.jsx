import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import "./CollegePlacements.scss";

const CollegePlacements = () => {
  return (
    <div className="main">
      <div className="clg">
        <div className="stats">
          <div className="item">
            <div className="top">
              <span>46</span>
              <BadgeOutlinedIcon fontSize="large" color="primary" />
            </div>
            <span className="title"> Total No. of Placements</span>
          </div>
          <div className="item">
            <div className="top">
              <span>39</span>
              <SchoolOutlinedIcon fontSize="large" color="primary" />
            </div>
            <span className="title"> No. of Students Placed</span>
          </div>
          <div className="item">
            <div className="top">
              <span>7.2</span>
              <CurrencyRupeeOutlinedIcon fontSize="large" color="primary" />
            </div>
            <span className="title"> Avg. Salary Package (LPA)</span>
          </div>
        </div>
        <div className="sect">
          <span>
            Our Top <br /> Placements
          </span>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/85169428?v=4"
              alt=""
            />
            <span>Shigin S</span>
            <p>Placed @ Federal Bank (12 LPA)</p>
          </div>
          <div className="vl"></div>
          <div className="item">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQF-kGaQIXVUGA/profile-displayphoto-shrink_800_800/0/1656843890816?e=1689811200&v=beta&t=GuACRXC1XW_GBwkrwQEObbYPolG4ttaN6xAswQ7qG-k"
              alt=""
            />
            <span>Shifan Sadique</span>
            <p>Placed @ MindTree (6.5LPA)</p>
          </div>
          <div className="vl"></div>
          <div className="item">
            <img
              src="https://media.licdn.com/dms/image/D5603AQGmDH0XIJlzbA/profile-displayphoto-shrink_800_800/0/1675995639993?e=1689811200&v=beta&t=6OmBq_PXJiSD8RXStpxKUk5bTFFRzVOWuDn6Dg_76D4"
              alt=""
            />
            <span>Harish Shaji</span>
            <p>Placed @ Chainalytics (6 LPA)</p>
          </div>
        </div>
        <div className="sect1">
          <span>Our Top Recruiters</span>
          <div className="recList">
            <img
              src="https://ca.cet.ac.in/wp-content/uploads/mphasis_300x150.jpg"
              alt=""
            />
            <img
              src="https://sjbit.edu.in/wp-content/uploads/2021/08/mindtree-logo.jpg"
              alt=""
            />
            <img
              src="https://trendingintesting.com/wp-content/uploads/2021/02/0001-17258608473_20210222_150417_0000.png"
              alt=""
            />
            <img
              src="https://mma.prnewswire.com/media/379251/Deloitte_Logo.jpg?p=facebook"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePlacements;
