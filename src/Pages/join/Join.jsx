import React from "react";
import { Link } from "react-router-dom";
import "./join.scss";

const Join = () => {
  return (
    <div className="join">
      <div className="card m-5 p-0">
        <div className="left p-5">
          <Link to="/studentReg" className="w-75 h-25">
            <button className="user fw-bold rounded p-1 w-100 h-75">Student</button>
          </Link>
          <Link to="/collegeReg" className="w-75 h-25">
            <button className="user fw-bold rounded p-1 w-100 h-75">College</button>
          </Link>
          <Link to="/alumniReg" className="w-75 h-25">
            <button className="user fw-bold rounded p-1 w-100 h-75">Alumni</button>
          </Link>
          {/* <Link to="/recruiterReg" className="w-75 h-25">
            <button className="user fw-bold rounded p-1 w-100 h-75">Recruiter</button>
          </Link> */}
          
        </div>
        <div className="right p-5">
          <h1>Our Community</h1>
          <p>
          We can interact and find people of similar interests through the community,which is a platform for MCA Students. 
          It lets the members showcase their work and receive constructive criticism,as well as find people to collabarate with. We also promote
           the use of other coding languages through workshops and other events. We can help
           increase the employability of our members through the technical skills we promote.
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button className="rounded fw-bold">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
