import React, { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Register.scss";

const CollegeReg = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   init();
  // }, []);

  // const init = async () => {

  //   const res = await makeRequest("/auth/view");
  //   console.log(res);
  //   setTableData(res.data.users);
  //   setIsLoading(false);
  // };
  
  // const [tableData, setTableData] = useState([]);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    clg_name: "",
    email: "",
    hod: "",
    username: "",
    password: "",
  });

  const [err, setErr] = useState();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/registerCollege",
        inputs
      );
      console.log(res)
      
      if (window.confirm('College has been Registered. Waiting for Verification'))
      {
          navigate("/login")
      }
      else
      {
          navigate("/collegeReg")
      }


    } catch (err) {
      console.log(err.response.data);
      setErr(err.response.data.message);
    }
  };

  return (
    <div className="Reg">
      <div className="card p-5">
        <img
          src="https://techworldthink.github.io/MCA/assets/img/logo.png"
          alt="logo"
          className="logo m-3"
        />
        <h5 className="m-1">College Sign-Up</h5>
        <form action="" method="post" className="w-100">
          <div className="row">
            <input
              type="text"
              name="clg_name"
              value={inputs.clg_name}
              placeholder="College name"
              className="w-50 m-3 p-1 col "
              id=""
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="w-50 m-3 p-1 col"
              name="hod"
              value={inputs.hod}
              id=""
              placeholder="HOD Name"
              onChange={handleChange}
            />
            <input
              type="email"
              className="w-50 m-3 p-1 col"
              name="email"
              value={inputs.email}
              id=""
              placeholder="E-mail address"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <input
              type="text"
              name="username"
              value={inputs.username}
              placeholder="Username"
              className="w-50 m-3 p-1 col"
              id=""
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={inputs.password}
              className="w-50 m-3 p-1 col"
              id=""
              placeholder="Password"
              onChange={handleChange}
            />
            {/* <input
              type="password"
              name="cnfmpassword"
              className="w-50 m-3 p-1 col"
              id=""
              placeholder="Confirm Password"
            /> */}

            {err && err}
          </div>
          <div className="row d-flex justify-content-center">
            <button className="mt-4  rounded col" onClick={handleClick}>
              Sign Up
            </button>
          </div>
          {/* {isLoading
            ? "Loading"
            : tableData.map((item, idx) => (
                <div>
                  <h1>{item.username}</h1>
                  <h1>{item.type}</h1>
                </div>
              ))} */} 
        </form>
      </div>
    </div>
  );
};

export default CollegeReg;
