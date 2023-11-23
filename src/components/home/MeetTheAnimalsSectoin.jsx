import React from 'react'
import CirclePetCard from "../shared/cards/CirclePetCard";
import petData from '../../../public/data/pets.json'
import { Link } from 'react-router-dom';

const MeetTheAnimalsSectoin = () => {
    return (
        <div className=' w-[95%] md:w-[80%] mx-auto flex flex-col gap-5 my-10 md:my-20 '>
            <div className=' text-center '>
                <div className=' text-lg text-primary font-bold '>
                    Meet the Animals
                </div>
                <div className=' mt-3 text-3xl font-bold tracking-wider '>
                    Pets are Waiting for Adoption
                </div>
            </div>
            {/* Animal Items */}
            <div className=' flex flex-wrap md:mt-8 '>
                {
                    petData.slice(0, 4)?.map(pet => {
                        return <div className=' basis-12/12 md:basis-3/12 flex justify-center '>
                            <CirclePetCard pet={pet} key={pet.id} />
                        </div>
                    })
                }
            </div>
            <div className=' my-5 text-center '>
                <Link to='#' className=' text-lg '>
                    If you want to find more pets <span className=' indie-flower-font text-primary underline '>
                        <Link to={'/pets'}>
                            Click Here
                        </Link>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default MeetTheAnimalsSectoin