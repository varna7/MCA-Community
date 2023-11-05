import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../../axios";
import { AuthContext } from "../../../context/authContext";
import "./cover.scss"

const Cover = () => {

  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [inputId, setInputId] = useState({
    id: currentUser.id,
  });
  const [clgData, setClgData] = useState([]);

  console.log(inputId);
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await makeRequest.get(
      `/colleges/getSingleCollege?id=${currentUser.id}`
    );
    console.log(res);
    setClgData(res.data.college);
  };


  return (
    <div className='all-cover'>
      {clgData.map((clg, idx) => (
      <img src={clg.cover} alt="" className="cover " />
      
      /* <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/Cet_emblem.jpg" alt="" className="logo" /> */
      ))};
    </div>
  )
}

export default Cover