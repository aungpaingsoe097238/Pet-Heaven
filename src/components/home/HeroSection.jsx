import React from 'react'
import { Link } from 'react-router-dom'

const hero = () => {
    return (
        <section className=' home-hero '>
            <div className=' w-[95%] md:w-[80%] mx-auto flex '>
                <div className=' flex flex-col gap-7 '>
                    <div className=' text-5xl md:text-7xl indie-flower-font text-primary font-bold '>
                        Adopt For Your Life!
                    </div>
                    <div className=' text-xl text-white '>
                        A pet is the only thing on earth that loves you more than you love yourself.
                    </div>
                    <div>
                        <Link to={'/pets'}>
                            <button class="button-56" role="button">Discover Pets</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero