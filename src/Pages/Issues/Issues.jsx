import React ,{useState}from 'react'
import "./Issues.scss"
import { makeRequest } from "../../axios";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Issues = () => {
    const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    type: "",
    topic: "",
    desc: "",
    
  });

  const [err, setErr] = useState();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/issues",
        inputs
      );
      console.log(res)
      
      if (window.confirm('Issue has been Submitted. Waiting for Verification'))
      {
          window.location.reload()
      }
      


    } catch (err) {
      console.log(err.response.data);
      setErr(err.response.data.message);
    }
  };

  return (
    <div className='issues'>
        <div className="raise">
        <img
            src="https://techworldthink.github.io/MCA/assets/img/logo.png"
            alt="logo"
            className="logo m-0"
          />
          <span>Raise Your Issues</span>
            <form action="" method='post'>
                <div className="type">
                    <label htmlFor="type">Issue Type</label>
                    <select name="type" id="type" onChange={handleChange}>
                        <option value="public">public</option>
                        <option value="private">private</option>
                    </select>
                </div>
                <input type="text" name="topic" onChange={handleChange} placeholder='Topic'/>
                <textarea name="desc" onChange={handleChange} id="" cols="30" placeholder='Detailed Description' rows="10"></textarea>
                <button onClick={handleClick}>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Issues