import React from 'react'
import "./CollegeScroller.scss"
import ProfileAbout from '../../components/College/ProfileAbout/ProfileAbout'
import Posts from '../../components/Posts/Posts'
import CollegePlacements from '../../components/College/CollegePlacements/CollegePlacements'
import ProfileAlumni from '../../components/College/ProfileAlumni/ProfileAlumni'

const Collegescroller = () => {
  return (
    <div className='college-scroller'>
        <ProfileAbout/>
        <Posts/>
        <CollegePlacements/>
        <ProfileAlumni/>
    </div>
  )
}

export default Collegescroller