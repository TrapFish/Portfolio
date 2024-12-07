import React from 'react';
import {  NavLink  } from 'react-router-dom';
import './index.css';

function Navigation() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/skills" activeClassName="active">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/project" activeClassName="active">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
               
            </ul>
        </nav>
    );
}

export default Navigation;