import React from 'react'
import { Link } from 'react-router-dom'
import { btnText, heroText } from './data'

const Hero = () => {
    return (
        <div className='bg-cyan-900 w-full h-auto p-40 flex flex-col justify-center items-center'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-white transition duration-150 mb-14'>{heroText}</h1>
            <Link to={'/'} className='py-6 px-10 bg-yellow-500 rounded-full font-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400 flex justify-between items-center animate-bounce w-52'>
                {btnText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </Link>
        </div>
    )
}

export default Hero
