import { useEffect, useState } from "react";
import "./Register.scss";
import axios from "axios";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";

const StudentRegister = () => {
  const [clgData, setClgData] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    college: "",
    batch: "",
    status: "student",
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    init();
  },[]);

  const init = async () => {
    const res = await makeRequest("/auth/getCollege");
    console.log(res);
    setClgData(res.data.college);
  };
 

  const [err, setErr] = useState();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try { 
      const res = await axios.post(
        "http://localhost:8000/api/auth/registerUser",
        inputs
      );
      console.log(res)
      
      if (window.confirm('User has been Registered. Waiting for Verification'))
      {
          navigate("/login")
      }
      else
      {
          navigate("/studentReg")
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
        <h5 className="m-1">Student Sign-Up</h5>
        <form action="" method="post" className="w-100">
          <div className="row">
            <input
              type="text"
              className="w-50 m-3 p-1 col"
              name="name"
              id=""
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              className="w-50 m-3 p-1 col"
              name="email"
              id=""
              onChange={handleChange}
              placeholder="E-mail address"
            />
          </div>
          <div className="row">
            <select
              name="college"
              onChange={handleChange}
              className="w-50 m-3 p-1 col"
              id=""
            >
              <option value="" disabled selected className="muted">
                choose your college
              </option>
              {(!clgData)?
              <option >No colleges registered</option>
              :clgData.map((clg,idx)=>(
                <option value={clg.clg_name}>
                {clg.clg_name}
                </option>
              ))
              }
              
              {/* <option value="TKM College of Engineering">
                TKM College of Engineering
              </option>
              <option value="Govt. Engineering College, Thrissur">
                Govt. Engineering College, Thrissur
              </option> */}
            </select>
            <input
              type="text"
              name="batch"
              onChange={handleChange}
              className="w-50 m-3 p-1 col"
              id=""
              placeholder="Passout Year"
            />
          </div>
          <div className="row">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="w-50 m-3 p-1 col"
              id=""
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-50 m-3 p-1 col"
              id=""
              placeholder="Password"
            />
            {/* <input
              type="password"
              name="cnfmpassword"
              className="w-50 m-3 p-1 col"
              id=""
              placeholder="Confirm Password"
            /> */}
          </div>
          <div className="row d-flex justify-content-center">
            <button className="mt-4  rounded col" onClick={handleClick}>
              Sign Up
            </button>
          </div>
          {err && err}
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
