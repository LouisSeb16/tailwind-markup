import React from 'react'
import { Link } from 'react-router-dom'
import { navMenu } from './data'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center' : 'hidden'} onClick={toggle}>
            {navMenu.map((data, index) => (
                <Link 
                className='p-4'
                key={index} 
                to={data.href}>
                    {data.name}
                </Link>
            ))}
        </div>
    )
}

export default Sidebar
