import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import './topbar.css'
import Navbar from 'react-bootstrap/Navbar';

const Topbar = () => {
  return (
    <Navbar bg="none" expand="lg" className='nav' >
      <ul className='navItem d-flex flex-row list-unstyled  '>
        <li className='px-2'>Home</li>
        <li className='px-2'>About</li>
        <li className='px-2'>Features</li>
        <li className='px-2'>Posts</li>
        <li className='px-2'>Contact</li>
      </ul>
    </Navbar>
  )
}

export default Topbar