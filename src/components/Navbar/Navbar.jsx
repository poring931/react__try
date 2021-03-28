import React from 'react';
import NavbarCss from './Navbar.module.css';

const Navbar = () => {
    return <nav className={NavbarCss.nav}>
        <div className={NavbarCss.item}>
            <a>Profile</a>
        </div>
        <div className={NavbarCss.item}>
            <a>Messages</a>
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