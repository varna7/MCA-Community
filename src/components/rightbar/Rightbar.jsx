import React from 'react'
import "./rightbar.scss"

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQFioRXoNuV5HQ/profile-displayphoto-shrink_400_400/0/1646328532533?e=1688601600&v=beta&t=nE0vKSXPsv0EzS-I1ipheyvuPs8k8pXS2EDrITQ9QFg"
                alt=""
              />
              <span>Achuttan </span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/93277562?v=4"
                alt=""
              />
              <span>Abhijith</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/85169428?v=4"
                alt=""
              />
              <p>
                <span>Shigin</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/67517134?s=100&v=4"
                alt=""
              />
              <p>
                <span>Shifan</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/93380300?s=100&v=4"
                alt=""
              />
              <p>
                <span>Aravind</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
         
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/93380300?s=100&v=4"
                alt=""
              />
              <div className="online" />
              <span>Aravind</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/74710908?s=100&v=4"
                alt=""
              />
              <div className="online" />
              <span>Adwaith</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar