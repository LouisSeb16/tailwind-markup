import React, { Component, useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../../features/navigation/Navbar';
import Sidebar from '../../features/navigation/Sidebar';

const Layout = ({exact, path, Component}) => {
    const [isOpen, setIsOpen] = useState();
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        const hideMenu = () => {
            if(window.innerWidth > 768 && isOpen){
                setIsOpen(false);
            }
        }
        window.addEventListener('resize', hideMenu);
        return () => {
            window.removeEventListener('resize', hideMenu);
        }
    })
    return (
        <Route path={path} exact={exact} render={(pageProps) => (
            <>
                <Navbar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Component {...pageProps}/>
            </>
        )} />
    )
}

export default Layout