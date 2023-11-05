import React from "react";
import "./leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://media.licdn.com/dms/image/C5603AQEGgpuqBNTajQ/profile-displayphoto-shrink_100_100/0/1650730904994?e=1688601600&v=beta&t=oElCDJey_ER4wG7E97fEgIqwPjBwy0JILoG5S5FZbZY"
              alt=""
            />
            <span>Varna MV</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Leftbar;
