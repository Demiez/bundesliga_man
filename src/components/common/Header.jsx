import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "#F15B0A"};

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/teams" activeStyle={activeStyle}>
                Playing Teams
            </NavLink>
            {" | "}
            <NavLink to="/games" activeStyle={activeStyle}>
                Finished Games
            </NavLink>
            {" | "}
            <NavLink to="/standings" activeStyle={activeStyle}>
                Current Standings
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>
        </nav>
    )
};

export default Header;