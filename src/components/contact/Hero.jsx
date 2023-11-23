import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='contact-hero'>
      <div className=' w-[80%] mx-auto '>
        <div className=' text-7xl indie-flower-font font-bold text-primary  '>
          Contact Us
        </div>
        <div className=' ps-5 mt-3 text-xl font-bold '>
          <span className=' text-primary '>
            <Link to={'/'}>
              Home |
            </Link>
          </span> <span className=' text-white ' >Contact Us</span>
        </div>
      </div>
    </div>
  )
}

export default Hero