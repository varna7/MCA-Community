import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./AdminSidebar.scss";
import { AuthContext } from "../../../context/authContext";

const AdminSidebar = () => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="adminSidebar">
      <div className="user">
        <Link to="/">
          <span>
            <img
              src="https://techworldthink.github.io/MCA/assets/img/logo.png"
              alt="logo"
              className="logo "
            />
          </span>
        </Link>
        {/* <span>Admin.</span> */}
      </div>

      <div className="nav">
        <Link to="/admin">
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/">
          <div className="item">
            <HomeOutlinedIcon />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/admin/view-college">
          <div className="item">
            <SchoolOutlinedIcon />
            <span>Colleges</span>
          </div>
        </Link>
        <Link to="/admin/view-users">
          <div className="item">
            <PersonSearchOutlinedIcon />
            <span>Users</span>
          </div>
        </Link>
        <Link to="/admin/posts">
          <div className="item">
            <ArticleOutlinedIcon />
            <span>Posts</span>
          </div>
        </Link>
        {/* <Link to="/admin">
          <div className="item">
            <PeopleOutlineOutlinedIcon />
            <span>Recruiters</span>
          </div>
        </Link> */}

        <Link to="/admin">
          <div className="item">
            <HandshakeOutlinedIcon />
            <span>Complaints</span>
          </div>
        </Link>
        <Link to="/admin/resources">
          <div className="item">
            <BubbleChartOutlinedIcon />
            <span>Resources</span>
          </div>
        </Link>
        <button
          className="item rounded"
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

export default AdminSidebar;
