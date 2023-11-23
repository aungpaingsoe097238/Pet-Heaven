import React from 'react'
import PetCard from "../../components/shared/cards/PetCard"
import petData from '../../../public/data/pets.json'

const List = () => {
    return (
        <div className=' w-[95%] md:w-[80%] mx-auto mb-[100px] '>
            <div className=' flex flex-col md:flex-row flex-wrap '>
                {
                    petData?.map( (pet,index) => {
                        return <div className=' basis-4/12 ' key={pet?.id}>
                            <PetCard pet={pet} index={index} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default List