import React from 'react'
import { Link } from 'react-router-dom'
import { navMenu } from './data'

const Navbar = ({toggle}) => {
    return (
        <nav className='p-6 flex justify-between font-sans'>
            <Link to='/' className='text-2xl font-bold'>LOGO</Link>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            <div className='md:block hidden'>
                {navMenu.map((data, index) => (
                    <Link 
                    className='p-4'
                    key={index} 
                    to={data.href}>
                        {data.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
