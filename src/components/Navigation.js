import React from 'react';
import { ReactDOM } from 'react-dom';
import { 
    NavLink,
    Link
} from 'react-router-dom';
const Navigation = () => {
    return(
        <header>
            <h2>Willie Morris</h2>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/projects'>My Projects</NavLink></li>
                <li><NavLink to='contact'>Contact Me</NavLink></li>
            </ul>
        </header>
    )
};


export default Navigation