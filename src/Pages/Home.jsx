import React from 'react'
import {Link} from 'react-router-dom'
import Topbar from '../components/Topbar'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
// import "./home.css"
import "./Home.scss"

const Home = () => {
  return (
    <div className='main'>
        <header className=''>
            <div className="top d-flex flex-row justify-content-between">
              <img src="https://techworldthink.github.io/MCA/assets/img/logo.png" alt="logo"  className='logo m-0'/>
              <Topbar />
              <Link to="/login">
                <button className='loginButton rounded-pill px-3 m-3 border border-0'>Login</button>
              </Link>
            </div>
            <div className="topContent">
              <h3 className='mx-5  my-3 text-light'>We are building <br/>Our world</h3>
              <h4 className='mx-5 text-light '>We Deserve Better</h4>
              <Link to="/join">
                <button className=' rounded-pill px-2 m-5 '>Join Us</button>
              </Link>
              <img src="https://info.traceparts.com/wp-content/uploads/2022/02/tp-developers.png" className='headImg' alt="" />
            </div>
        </header>





        
        <section id='about' className='container m-5'>
          <div className="title display-6 text-center">About</div>
          <div className="content  rounded border border-0 p-5 m-3">KTU MCA Community is a student community pursuing MCA (Master of Computer Applications) from APJ Abdul Kalam Technological University, Kerala. It was founded in 2019 for resolving various problems faced by the students. 
            And now it has about 3000 members across 27 colleges as students and alumnis.
            Our communities can provide a range of benefits to students, including networking, information sharing, learning and development, support and motivation, and socialization.</div>
        </section>
        <section id="features" className="container m-5 ">
          <div className="d-flex px-5">
            <div className="title col m-3 display-6">Explore <br /> Our Features</div>
            
            <div className="featItem  m-3 col ">
              <img className='' src="https://thumbs.dreamstime.com/b/college-students-university-education-concept-people-vector-illustration-young-men-women-reading-books-disabled-guy-176093589.jpg" alt="missing" />
              <Link to="/find-college"><h5 className='featItemTitle'>Find Your College</h5></Link>
            </div>
            
            
            {/* <div className="featItem m-3 col ">
              <img className='' src="https://i.pinimg.com/originals/c8/fd/f7/c8fdf7fd61e5b7a2971b57325216ce03.jpg" alt="missing" />
              <h5 className='featItemTitle'>Find Your College</h5>
            </div> */}
          {/* </div>
          <div className="row px-5"> */}
          
            <div className="featItem   m-3 col ">
            
            <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/books-3327973-2793942.png" alt="missing" />
            <Link to="/resources">
            <h5 className='featItemTitle'>free resourses</h5>
            </Link> 
            </div>
           
            <div className="featItem m-3 col ">
              <img className='' src="https://circle.cloud/wp-content/uploads/2022/09/Complaints-Illustration.png" alt="missing" />
              <Link to ="/issues"><h5 className='featItemTitle'>Raise your Issues</h5></Link>
            </div>
            <div className="featItem m-3 col">
              <img className='' src="https://img.freepik.com/free-vector/interview-concept-illustration_114360-1678.jpg?w=2000" alt="missing" />
              <h5 className='featItemTitle'>Placement Support</h5>
            </div>
          </div>
        </section>
        <footer>
          <div className="social-media">
            <a href="https://www.instagram.com/ktu_mca_community/?hl=en"><FacebookIcon/></a>
            <a href="https://www.facebook.com/KTUMcaCommunity/"><InstagramIcon/></a>
            <a href="https://t.me/ktustudentsmca"><TelegramIcon/></a>
          </div>
          <span>COPYRIGHT <h6>KTU MCA Community</h6>  - TERMS & CONDITIONS PRIVACY POLICY</span>
        </footer>
    </div>
  )
}

export default Home