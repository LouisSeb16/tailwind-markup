import React from 'react'
import { contText } from './data'

const ContactHero = () => {
    return (
        <div className='bg-teal-500 w-full h-auto p-40 flex flex-col justify-center items-center'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-white transition duration-150 mb-14'>{contText}</h1>
        </div>
    )
}

export default ContactHero
