import React from 'react'

const RecruiterReg = () => {
  return (
    <div className="Reg">
      <div className="card p-5">
        <img src="https://techworldthink.github.io/MCA/assets/img/logo.png" alt="logo"  className='logo m-3'/>
        <h5 className="m-1">Recruiter Sign-Up</h5>
        <form action="" className="w-100">
          <div className="row">
            <input
              type="text"
              className="w-50 m-3 p-1 col"
              name="Name"
              id=""
              placeholder="Name"
            />
            <input
              type="email"
              className="w-50 m-3 p-1 col"
              name="Email"
              id=""
              placeholder="E-mail address"
            />
          </div>
          <div className="row">
            <input type="text" name="company" placeholder="Company name" className="w-50 m-3 p-1 col" id="" />
          </div>
          <div className="row">
          <input type="text" name="username" placeholder="Username" className="w-50 m-3 p-1 col" id="" />
            <input type="password" name="password" className="w-50 m-3 p-1 col" id="" placeholder="Password"/>
            {/* <input type="password" name="cnfmpassword" className="w-50 m-3 p-1 col" id="" placeholder="Confirm Password"/> */}
          </div>
          <div className="row d-flex justify-content-center">
          <button className="mt-4  rounded col">Sign Up</button>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default RecruiterReg