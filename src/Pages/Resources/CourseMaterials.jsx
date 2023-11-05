import React from "react";
import  "boxicons";
import "./Resources.scss";
import { Link } from "react-router-dom";

const CourseMaterials = () => {
  return (
    <div className="resources">
      <div className="res-header">
        <img
          src="https://techworldthink.github.io/MCA/assets/img/logo.png"
          alt="logo"
          className="logo m-3 w-5 h-5"
        />
        <div className="res-header-title ">Free resourses</div>
        <p>Learn.Share.Grow</p>
      </div>
      <div className="res-items w-75 px-5 py-2 mx-5 my-1">
        <div className="row">
          <div className="folder col m-4 p-3 ">
            <a href="https://ktu.edu.in/data/MCA%20Syllabus.pdf?=qsrMdr4VIRIwu8p%2BZvFv4gqO%2B9bGRGJIwh6Q2YyM8sgTzrETe9oaq0tXa4J%2B2fqf">
              <box-icon name="file" type="solid" color="#0831ab"></box-icon>
            </a>
            <p>KTU MCA Syllabus</p>
          </div>

          <div className="folder col m-4 p-3">
            <Link to="/course-materials/sem-1">
            <box-icon
              name="folder-open"
              type="solid"
              color="#062da2"
            ></box-icon>
            <p>Semester 1</p>
            </Link>
          </div>
          <div className="folder col m-4 p-3">
            <box-icon
              name="folder-open"
              type="solid"
              color="#062da2"
            ></box-icon>
            <p>Semester 2</p>
          </div>
        </div>

        <div className="row">
          <div className="folder col  m-4 p-3">
            <box-icon
              name="folder-open"
              type="solid"
              color="#062da2"
            ></box-icon>
            <p>Semester 3</p>
          </div>
          <div className="folder col m-4 p-3">
            <box-icon
              name="folder-open"
              type="solid"
              color="#062da2"
            ></box-icon>
            <p>Semester 4</p>
          </div>
          <div className="folder col m-4 p-3">
            <box-icon
              name="folder-open"
              type="solid"
              color="#062da2"
            ></box-icon>
            <p>Others</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterials;
