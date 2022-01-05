import React from 'react'
import Home from '../../../pages/Home';
import Layout from './index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from '../../../pages/About';
import Contact from '../../../pages/Contact';


const AppSwitcher = () => {
    return (
        <Router>
            <Switch>
                <Layout path='/' exact Component={Home}/>
                <Layout path='/about' Component={About}/>
                <Layout path='/contact' Component={Contact}/>
            </Switch>
        </Router>
    )
}

export default AppSwitcher
