import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/">
          <span><img src="https://techworldthink.github.io/MCA/assets/img/logo.png" alt="logo"  className='logo '/></span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" name="" id="" placeholder='Search'/>
        </div>
        
      </div>
      <div className="right">
        <MailOutlineOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <PersonOutlineOutlinedIcon/>
        <div className="user">
          <img src="https://media.licdn.com/dms/image/C5603AQEGgpuqBNTajQ/profile-displayphoto-shrink_100_100/0/1650730904994?e=1688601600&v=beta&t=oElCDJey_ER4wG7E97fEgIqwPjBwy0JILoG5S5FZbZY" alt="" />
          <span>Varna MV</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar