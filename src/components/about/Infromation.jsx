import React from 'react'

const Infromation = () => {
    return (
        <div className=' flex flex-col md:flex-row w-[95%] md:w-[80%] mx-auto my-10 md:my-14 items-center '>
            <div className=' basis-1/2 '>
                <img src="/images/About/about-home.jpg"
                    className=' w-full md:h-[500px] object-contain '
                    alt="" />
            </div>
            <div className=' basis-1/2 '>
                <div className=' flex flex-col gap-4 '>
                    <div className=' text-3xl '>
                        Welcome to “PET HEAVEN”.
                    </div>
                    <div className=' text-xl opacity-75 '>
                        We're a passionate team dedicated to connecting loving homes with pets in need.Our mission is simple: create lifelong bonds between caring individuals and adorable companions. Join us in making tails wag and hearts rejoice!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infromation