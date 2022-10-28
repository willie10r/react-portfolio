import React from 'react';
import { useState } from 'react';
import { ReactDOM } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { ImMenu } from "react-icons/im";

const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false)
    const handleToggle = () => {
        setNavOpen(prev => !prev)
    }
    return (
        <header>
            <h2 className='nav-title'>{'<DevWillie>'}</h2>
            <nav className='navBar'>
                <button className='menu-button' onClick={handleToggle}>{navOpen ? 'Close' : <ImMenu />}</button>
                <ul className={`nav-bars ${navOpen ? ' show-nav' : ''}`}>
                    <li id='home-btn'><NavLink to='/' style={{ color: '#c5e1a5', textDecoration: 'none' }} >Home</NavLink></li>
                    <li id='projects-btn'><NavLink to='/projects' style={{ color: '#c5e1a5', textDecoration: 'none' }} >My Projects</NavLink></li>
                    <li id='contact-btn'><NavLink to='contact' style={{ color: '#c5e1a5', textDecoration: 'none' }} >Contact Me</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation