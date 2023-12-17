import React from 'react'
import landingimg from '../assets/landingimg.png';

const Landing = () => {
  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-5 d-flex align-items-center">
        <div>
          <p className="display-4">Welcome to Basic Bank</p>
          <p className="fs-3 ps-1"> Start a transfer now!</p>
        </div>
      </div>
      <div className="col-md-4">
      <img src={landingimg} />
      </div>
    </div>
      <div className='text-center'>
        <p>The Sparks Foundation - Internship - Kirankumar K</p>
      </div>
    </div>
  )
}

export default Landing