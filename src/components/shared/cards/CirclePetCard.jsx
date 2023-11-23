import React from 'react'
import { Link } from 'react-router-dom'

const CirclePetCard = ({ pet }) => {
    return (
        <div className=' flex flex-col items-center justify-center gap-4 px-4 my-3 md:my-0 '>
            <img src={pet?.image}
                className='  h-[250px] object-cover rounded-full '
                alt="" />
            <div className=' flex flex-col gap-3 text-center '>
                <div className=' text-2xl font-bold text-primary '>
                    {pet?.name}
                </div>
                <div>
                    {pet?.description}
                </div>
                <Link to={`/pets/${pet?.id}`} className=' text-md font-bold hover:text-primary '>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default CirclePetCard