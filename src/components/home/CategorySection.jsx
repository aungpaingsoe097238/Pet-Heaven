import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addState } from '../../features/services/modalSlice';
import { MdCardMembership } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import { GiDogHouse } from "react-icons/gi";

const CategorySection = () => {

    const dispatch = useDispatch();

    const handleShowModal = screen => {
        dispatch(addState({ screen: screen, open: true }))
    }

    return (
        <section className=' w-[95%] md:w-[80%] mx-auto '>
            <div className=' flex flex-col md:flex-row my-5 '>
                <div className=' basis-4/12 md:px-5 '>
                    <Link to='/pets'>
                        <div className=' category-card '>
                            <MdOutlinePets className=' text-6xl text-primary' />
                            <div className=' text-xl  indie-flower-font font-semibold '>
                                Find a Friend
                            </div>
                        </div>
                    </Link>
                </div>
                <div className=' basis-4/12 md:px-5 '>
                    <div className=' category-card' onClick={() => handleShowModal('member')}> 
                        <MdCardMembership className=' text-6xl text-primary ' />
                        <div className=' text-xl  indie-flower-font font-semibold ' >
                            Join Member
                        </div>
                    </div>
                </div>
                <div className=' basis-4/12 md:px-5 '>
                    <div className=' category-card ' onClick={ () => handleShowModal('donate') } >
                        <BiDonateHeart className=' text-6xl text-primary ' />
                        <div className=' text-xl  indie-flower-font font-semibold '>
                            Donate Now
                        </div>
                    </div>
                </div>
                <div className=' basis-4/12 md:px-5 '>
                    <div className='category-card ' onClick={() => handleShowModal('release')}>
                        <GiDogHouse className=' text-6xl text-primary' />
                        <div className=' text-xl  indie-flower-font font-semibold '>
                            Release Pet
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySection