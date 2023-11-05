import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.scss";
import { useState } from "react";

import { AuthContext } from "../context/authContext";
import { makeRequest } from "../axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    setErr("");
    e.preventDefault();
    // console.log(loginData)
    // try {
    //   await login(loginData);
    //   // navigate("/")
    // } catch (err) {
    //   console.log(err)
    //   setErr(err.response.data);
    // }
    const res = await makeRequest.post("/auth/login", loginData);
    const data = res?.data;
    console.log(data)
    if (data?.status == true) {
      if (data?.login?.status == 1){ 
        setCurrentUser(data?.login)
        if(data?.login?.type=="admin")
         navigate('/admin/view-college')
    
        else if(data?.login?.type=="colleges")
         navigate('/college/')

         else if(data?.login?.type=="users")
         navigate('/user-home')
    
      }

      else alert("Your registered details are not verified yet.");
    } else if (data?.status == false) {

      setErr(data?.message);
    }
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left p-5">
          <h1>Why Us</h1>
          <p>
          KTU MCA Community provides a platform to promote and support MCA Students
           and inspire them to excel in technology careers with the help of various events.
           We can make your path easier to achieve the goals and also to
           step up your tech career through various programs .
          </p>
          <span>Don't you have an account?</span>
          <Link to="/join">
            <button className="rounded fw-bold">Join Us</button>
          </Link>
        </div>
        <div className="right p-5 d-flex ">
          <div className="title fw-bold m-4">LOGIN</div>
          <div className="loginForm ">
            <form className="" action="" method="post">
              <input
                value={loginData.username}
                className=" row m-4"
                name="username"
                onChange={handleChange}
                type="email"
                placeholder="Username"
              />
              <input
                value={loginData.password}
                className="row m-4"
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
              />
              <button className=" rounded  m-4 " onClick={onSubmit}>
                Login
              </button>
              {err && err}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
