import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarCss from './Navbar.module.css';

const Navbar = () => {
    return <nav className={NavbarCss.nav}>
        <div className={NavbarCss.item}>
            <NavLink activeClassName={NavbarCss.active} to="/profile">Profile</NavLink>
        </div>
        <div className={NavbarCss.item}>
            <NavLink activeClassName={NavbarCss.active} to="/dialogs">Messages</NavLink>
        </div><div className={NavbarCss.item}>
            <a>News</a>
        </div>
        <div className={NavbarCss.item}>
            <a>Music</a>
        </div>
        <div className={NavbarCss.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;