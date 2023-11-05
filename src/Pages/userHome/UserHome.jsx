import React from 'react'
import "./userhome.scss"
import Story from "../../components/Story/Story"
import Posts from "../../components/Posts/Posts"

const UserHome = () => {
  return (
    <div className='userHome'>
      {/* <Story/> */}
      <Posts/>
    </div>
  )
}

export default UserHome