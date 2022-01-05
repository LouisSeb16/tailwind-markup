import React from 'react'
import { abtText } from './data'

const AboutHero = () => {
    return (
        <div className='bg-yellow-400 w-full h-auto p-40 flex flex-col justify-center items-center'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black transition duration-150 mb-14'>{abtText}</h1>
        </div>
    )
}

export default AboutHero
