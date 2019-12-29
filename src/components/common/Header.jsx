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
            <NavLink to="/basicinfo" activeStyle={activeStyle}>
                Basic Info
            </NavLink>
            {" | "}
            <NavLink to="/managerpanel" activeStyle={activeStyle}>
                Manager Panel
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>
        </nav>
    )
};

export default Header;