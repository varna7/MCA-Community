import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../../axios";

import "./AddResources.scss";

const AddResources = () => {
  const [course, setCourse] = useState({
    sem: "",
    course: "",
  });
  const [crsData,setCrsData] = useState([])
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async(e) => {
    setErr("");
    e.preventDefault();


    try { 
        const res = await axios.post(
          "http://localhost:8000/api/courses/addCourse",
          course
        );
        console.log(res)
        
        if (window.confirm('Course Added'))
        {
            window.location.reload();
        }
        
  
      } catch (err) {
        console.log(err.response.data);
        setErr(err.response.data.message);
      }

  }

  useEffect(() => {
    init();
  },[]);

  const init = async () => {
    const res1 = await makeRequest("/courses/getCourse");
    console.log(res1);
    setCrsData(res1.data.course);
    
  };


  const handleDelete = () => {
    makeRequest.delete("/courses/" ).then((data) => {
      console.log(data);
      window.location.reload();
    });
  };

  return (
    <div className="resources">
      <div className="addSection">
        <span>New Course</span>
        <form action="" method="post">

          <label htmlFor="sem">
            Semester :
            <select name="sem" id="sem" onChange={handleChange}>
              <option value="" disabled>
                Choose semester
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <label htmlFor="course">
            Course Name :
            <input
              type="text"
              name="course"
              id="course"
              onChange={handleChange}
            />
          </label>
          <div className="button">
            <button onClick={onSubmit}>Add</button>
          </div>
        </form>
      </div>
      <div className="viewSection">
        <span>Courses.</span>
        <table>
          
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Semester</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(crsData)?crsData.map((item,idx)=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.course_name}</td>
                <td>{item.sem}</td>
                <td><button className="rounded " onClick={handleDelete}>X  delete</button></td>
              </tr>

            )):
            <tr>
              <td>nothing</td>
            </tr>
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddResources;
