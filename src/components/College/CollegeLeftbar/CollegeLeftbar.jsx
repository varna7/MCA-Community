import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../../axios";
import "./CollegeLeftbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { AuthContext } from "../../../context/authContext";

const CollegeLeftbar = () => {
  const { logout } = useContext(AuthContext);
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
    <div className="clgleft">
      {clgData.map((clg, idx) => (
        <div className="user">
          <Link to="/">
            <span>
              <img src={clg.profile} alt="logo" className="logo " />
            </span>
          </Link>
          <span><p>{clg.clg_name}</p></span>
        </div>
      ))}
      <div className="nav">
        <Link to="/college">
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/home">
          <div className="item">
            <HomeOutlinedIcon />
            <span>Home</span>
          </div>
        </Link>
        
        <Link to="/college/view-users">
          <div className="item">
            <PersonSearchOutlinedIcon />
            <span>Users</span>
          </div>
        </Link>
        <Link to="/college/posts">
          <div className="item">
            <ArticleOutlinedIcon />
            <span>Posts</span>
          </div>
        </Link>
        <Link to="/college/placements">
          <div className="item">
            <WorkspacePremiumOutlinedIcon />
            <span>Placements</span>
          </div>
        </Link>
        
        
        <button
          className="item"
          onClick={() =>
            logout(() => {
              navigate("/login");
            })
          }
        >
          <LogoutOutlinedIcon />
          <span>LogOut</span>
        </button>
      </div>
    </div>
  );
};

export default CollegeLeftbar;
