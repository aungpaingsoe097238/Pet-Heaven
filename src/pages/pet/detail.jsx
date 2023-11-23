import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";
import petData from '../../../public/data/pets.json';
import { useDispatch } from "react-redux";
import { addState } from '../../features/services/modalSlice';

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [pet, setPet] = useState(null);

  const handleShowModal = screen => {
    dispatch(addState({ screen: screen, open: true }))
  }

  const handleGetCurrentPet = () => {
    const petId = Number(params.id);
    const foundPet = petData.find((pet) => pet.id === petId);
    setPet(foundPet);
  };

  useEffect(() => {
    handleGetCurrentPet();
  }, [params.id]);

  return (
    <div className=' w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-5 my-5 md:my-10 '>
      <div className=' basis-1/2 '>
        <div className=' w-full '>
          <img src={pet?.image} className=' w-full md:h-[500px] object-contain ' alt="" />
        </div>
      </div>
      <div className=' basis-1/2 '>
        <div>
          <div className=' text-4xl font-bold ' >{pet?.name}</div>
          <div className=' flex justify-start md:gap-5 mt-5 text-xl '>
            <table>
              <tr>
                <td className=' py-1 px-2 '>Gender:</td>
                <td className=' py-1 px-2 text-primary '>{pet?.gender}</td>
              </tr>
              <tr>
                <td className=' py-1 px-2 '>Age:</td>
                <td className=' py-1 px-2  text-primary '>{pet?.age}</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className=' py-1 px-2 '>Weight:</td>
                <td className=' py-1 px-2  text-primary '>{pet?.weight}</td>
              </tr>
              <tr>
                <td className=' py-1 px-2 '>Category:</td>
                <td className=' py-1 px-2 text-primary  '>{pet?.category}</td>
              </tr>
            </table>
          </div>
          <div className=' w-[80%] ps-2 mt-5 '>
            {pet?.description}
          </div>
          <div className=' mt-5 '>
            <button className=' default-btn flex gap-2 items-center ' onClick={() => handleShowModal('adopt')}>
              Adpot Pet
              <MdOutlinePets className=' text-xl transform rotate-45 ' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
