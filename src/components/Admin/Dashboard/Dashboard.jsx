import React, { useContext, useEffect } from 'react'
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { AuthContext } from '../../../context/authContext'
import "./Dashboard.scss"
import { Link } from 'react-router-dom';

const Dashboard = () => {

const {currentUser}=useContext(AuthContext)
  useEffect(() => {
    console.log(currentUser)
  // req

  }, [])
  
  return (
    <div className='admin'>
      <div className="head">
        <span>Users</span>
        <hr />
      </div>
      <div className="stats">
        <Link to="/admin/view-college">
          <div className="item">
            <div className="top">
              <span>16</span>
              <LocationCityOutlinedIcon fontSize="large" color="primary" />
            </div>
            <span className="title"> Colleges </span>
          </div>
          </Link>
          <Link to="/admin/view-users">
          <div className="item">
            <div className="top">
              <span>39</span>
              <SchoolOutlinedIcon fontSize="large" color="primary" />
            </div>
            <span className="title"> Students/Alumni</span>
          </div>
          </Link>
          <div className="item">
            <div className="top">
              <span>7</span>
              <BadgeOutlinedIcon fontSize="large" color="primary" />
            </div>
            <span className="title"> Recruiters</span>
          </div>
        </div>
    </div>
  )
}

export default Dashboard