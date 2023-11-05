import React from 'react'
import {Link} from 'react-router-dom'
import "./Resources.scss"

const Resources = () => {
  return (
    <div className='resources'>
        <div className="res-header">
        <img
          src="https://techworldthink.github.io/MCA/assets/img/logo.png"
          alt="logo"
          className="logo m-3 w-5 h-5"
        />
        <div className="res-header-title ">Free resourses</div>
        <p>Learn.Share.Grow</p>
        </div>
        <div className="res-items d-flex m-3">
          <div className="item  m-4 p-3"><Link to="/course-materials">KTU MCA  Course Materials</Link></div>
          <div className="item  m-4 p-3">MCA Entrance  Study Materials</div>
          <div className="item  m-4 p-3">Essential  Softwares</div>

        </div>
    </div>
  )
}

export default Resources