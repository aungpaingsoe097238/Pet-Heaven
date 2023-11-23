import React from 'react'
import { useWindowScroll } from "@uidotdev/usehooks";
import { MdOutlinePets } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addState } from "../../features/services/modalSlice";

const Header = () => {

  const dispatch = useDispatch();
  const [{ x, y }, scrollTo] = useWindowScroll();
  const location = useLocation();

  const isTransparent = _ => {
    if (y > 150) {
      return `bg-secondary fixed transition duration-300`;
    } else {
      return `bg-transparent fixed`
    }
  }

  isTransparent();

  const handleShowModal = screen => {
    dispatch(addState({ screen: screen, open: true }))
  }

  return (
    <div
      className={`h-14 flex items-center ${location.pathname === '/' ? isTransparent() : 'bg-secondary sticky'
        } top-0 w-full z-10`}
    >
      <div className=' w-[95%] md:w-[80%] mx-auto flex justify-between items-center '>
        <Link to={'/'}>
          <div className=' flex items-center gap-1 cursor-pointer '>
            <MdOutlinePets className=' text-4xl text-primary animate-bounce ' />
            <span className=' text-xl md:text-3xl font-semibold indie-flower-font '>
              <span className=' text-primary '>Pet</span> Heaven
            </span>
          </div>
        </Link>
        <div>
          <ul className=' flex gap-10 font-bold '>
            <li>
              <NavLink to={'/'} className=' nav-item hidden md:block ' activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/pets'} className='nav-item hidden md:block  '>
                Pets
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about-us'} className='nav-item hidden md:block  ' >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact-us'} className='nav-item  hidden md:block '>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className=' flex gap-2 md:gap-5 items-center font-bold '>
            <li>
              <div className=' cursor-pointer hover:text-primary ' onClick={() => handleShowModal('signup-screen')}>
                Sign Up
              </div>
            </li>
            |
            <li>
              <div className=' cursor-pointer hover:text-primary ' onClick={() => handleShowModal('login-screen')}>
                Log In
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header