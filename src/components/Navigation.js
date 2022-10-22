import React from 'react';
import { ReactDOM } from 'react-dom';
import {
    NavLink,
    Link
} from 'react-router-dom';
const Navigation = () => {
    return (
        <header>
            <h2 className='title'>Willie Morris</h2>
            <ul className='nav-bar'>
                <li id='home-btn'><NavLink to='/'>Home</NavLink></li>
                <li id='projects-btn'><NavLink to='/projects'>My Projects</NavLink></li>
                <li id='contact-btn'><NavLink to='contact'>Contact Me</NavLink></li>
            </ul>
        </header>
    )
};


export default Navigation