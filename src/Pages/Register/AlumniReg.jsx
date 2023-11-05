import React ,{useState} from "react";
import axios from "axios";

const AlumniReg = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    college: "",
    batch:"",
    status:"Alumni",
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
        "http://localhost:8000/api/auth/registerUser",
        inputs
      );
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
        <h5 className="m-1">Alumni Sign-Up</h5>
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
            <select name="college" onChange={handleChange} className="w-50 m-3 p-1 col" id="">
              <option value="" disabled selected className="muted">
                choose your college
              </option>
              <option value="College of Engineering, Trivandrum">
                College of Engineering, Trivandrum
              </option>
              <option value="TKM College of Engineering">
                TKM College of Engineering
              </option>
              <option value="Govt. Engineering College, Thrissur">
                Govt. Engineering College, Thrissur
              </option>
            </select>
            <input
              type="text"
              name="batch"
              className="w-50 m-3 p-1 col"
              id=""
              onChange={handleChange}
              placeholder="Passout Year"
            />
          </div>
          <div className="row">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-50 m-3 p-1 col"
              onChange={handleChange}
              id=""
            />
            <input
              type="password"
              name="password"
              className="w-50 m-3 p-1 col"
              id=""
              onChange={handleChange}
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
            <button className="mt-4  rounded col" onClick={handleClick}>Sign Up</button>
            
          </div>
          {err && err}
        </form>
      </div>
    </div>
  );
};

export default AlumniReg;
