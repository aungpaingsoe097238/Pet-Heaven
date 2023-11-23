import React from 'react'
import { MdOutlinePets } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addState } from "../../features/services/modalSlice"

const Footer = () => {

  const dispatch = useDispatch();

  const handleShowModal = screen => {
    dispatch(addState({ screen: screen, open : true }));
  }

  return (
    <>
      <div className=' bg-secondary py-5 md:py-14 text-lg '>
        <div className=' w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-3 md:gap-0 '>
          <div className=' basis-6/12 '>
            <Link to={'/'}>
              <div className=' flex items-center gap-1 cursor-pointer '>
                <MdOutlinePets className=' text-4xl text-primary ' />
                <span className=' text-3xl font-semibold indie-flower-font '>
                  <span className=' text-primary '>Pet</span> Heaven
                </span>
              </div>
            </Link>
            <ul className=' flex flex-col gap-4 mt-4 p-2 '>
              <li className=' flex gap-2 items-center '>
                <div>
                  <FaPhone className=' text-2xl text-primary ' />
                </div>
                <div>+65 98123650</div>
              </li>
              <li className=' flex gap-2 items-center '>
                <div>
                  <IoIosMail className=' text-2xl text-primary ' />
                </div>
                <div>petHeaven23@gmail.com</div>
              </li>
              <li className=' flex gap-2 items-start '>
                <div>
                  <FaLocationDot className=' text-2xl text-primary ' />
                </div>
                <div>
                  Gangsa Road ,887665, Singapore , Near Seoul Mart
                </div>
              </li>
              <li className=' flex gap-5 '>
                <div>
                  <FaInstagram className=' text-2xl hover:text-primary cursor-pointer  ' />
                </div>
                <div>
                  <FaFacebook className=' text-2xl hover:text-primary cursor-pointer  ' />
                </div>
                <div>
                  <FaTwitter className=' text-2xl  hover:text-primary cursor-pointer ' />
                </div>
              </li>
            </ul>
          </div>
          <div className=' basis-3/12 '>
            <div className=' indie-flower-font font-semibold text-2xl  '>
              Links
            </div>
            <ul className=' flex flex-col gap-2 md:mt-4 p-2 '>
              <li>
                <Link to='/' className=' hover:text-primary '>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/pets' className=' hover:text-primary '>
                  Pets
                </Link>
              </li>
              <li>
                <Link to='/about-us' className=' hover:text-primary '>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact-us' className=' hover:text-primary '>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className=' basis-3/12 '>
            <div className=' indie-flower-font font-semibold text-2xl  '>
              Services
            </div>
            <ul className=' flex flex-col gap-2 md:mt-4 p-2 '>
              <li>
                <Link to='#' className=' hover:text-primary ' onClick={ () => handleShowModal('donate') }>
                  Donate Now
                </Link>
              </li>
              <li>
                <Link to='#' className=' hover:text-primary ' onClick={ () => handleShowModal('release') }>
                  Release Pet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' mx-auto py-5 ps-3 bg-dark text-white '>
        <div className=' w-[95%] md:w-[80%] mx-auto text-center '>
          Copyright © All rights reserved by : <span className=' indie-flower-font  font-bold text-primary cursor-pointer '>Thandar Khaing</span>
        </div>
      </div>
    </>
  )
}

export default Footer