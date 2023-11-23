import React from 'react'
import { MdOutlinePets } from "react-icons/md";
import { useNavigate } from "react-router-dom"

const PetCard = ({ pet, index }) => {

    const navigate = useNavigate();

    const except = (text, limit = 80) => {
        if (text.length < limit) {
            return text;
        } else {
            return text.slice(0, limit)
        }
    }

    const handleGoDetail = _ => {
        navigate(`/pets/${pet.id}`)
    }

    return (
        <div 
        className={`px-3 relative shadow-sm rounded-lg cursor-pointer mt-[100px]`} onClick={handleGoDetail}>
            <MdOutlinePets className=' text-3xl transform rotate-45 absolute top-2 end-5 text-primary ' />
            <img src={pet.image}
                className=' w-full h-[400px] object-cover shadow-sm rounded-lg hover:opacity-80 transition-all hover:-translate-y-1 '
                alt="" />
            {/* Description */}
            <div className=' absolute p-5 -bottom-[70px] h-[150px] w-[85%] py-8 rounded-xl shadow-md bg-white left-[7%] '>
                <div className=' text-center '>
                    <div className=' text-primary font-bold text-xl indie-flower-font   '>
                        {pet.name}
                    </div>
                    <div className=' mt-2  '>
                        {except(pet.description)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetCard