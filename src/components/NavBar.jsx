// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/characters" activeClassName="active">
                        Browse Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/comics" activeClassName="active">
                        Comics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
