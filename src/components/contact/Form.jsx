import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";

const Form = () => {
    return (
        <div className=' w-[95%] md:w-[80%] mx-auto my-5 md:my-14 '>
            <div className=" border shadow-sm bg-white h-full flex flex-col md:flex-row p-3 md:p-10 text-start ">
                <div className=" basis-2/5 ">
                    <div className=" flex flex-col gap-5 ">
                        <div className=" text-3xl  md:text-4xl ">
                            Send us a Message
                        </div>
                        <div className=" flex gap-3 font-light items-center ">
                            <FaPhone className=" text-xl " />
                            <div>(+65) 981 236 50</div>
                        </div>
                        <div className=" flex gap-3 font-light items-center ">
                            <IoIosMail className=" text-2xl " />
                            <div>petHeaven23@gmail.com</div>
                        </div>
                        <div className=" flex gap-3 font-light items-center ">
                            <FaLocationDot className=" text-2xl " />
                            <div>Gangsa Road ,887665, Singapore , Near Seoul Mart</div>
                        </div>
                        <div>
                            <ul className=" flex gap-5 items-center ">
                                <li>
                                    <FaFacebook className=" text-2xl  hover:text-primary cursor-pointer  " />
                                </li>
                                <li>
                                    <FaInstagram className=" text-2xl  hover:text-primary cursor-pointer  " />
                                </li>
                                <li>
                                    <FaTwitter className="  text-2xl hover:text-primary cursor-pointer  " />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" basis-3/5 ">
                    <div className=" flex flex-col gap-4 justify-between h-full mt-5 md:mt-0 ">
                        <div className=" flex flex-col md:flex-row gap-5 ">
                            <input type="text" className=" w-full p-3 border-b " placeholder="Name" />
                            <input type="text" className=" w-full p-3 border-b " placeholder="Email" />
                        </div>
                        <div className=" flex flex-col md:flex-row gap-5 ">
                            <input type="text" className=" w-full p-3 border-b " placeholder="Subject" />
                            <input type="text" className=" w-full p-3 border-b " placeholder="Phone Number" />
                        </div>
                        <div className=" flex ">
                            <select className=" w-full bg-transparent opacity-40 px-2 py-5 border-b ">
                                <option value="">What is your inquiry about?</option>
                                <option value="">General Information Request</option>
                                <option value="">Partner Relations</option>
                                <option value="">I need help</option>
                            </select>
                        </div>
                        <div>
                            <textarea name="" id="" rows="5" className=" w-full border-b p-3 " placeholder="Your Message"></textarea>
                        </div>
                        <div className=" text-end ">
                            <button className="default-btn mb-3 md:mb-0 ">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form