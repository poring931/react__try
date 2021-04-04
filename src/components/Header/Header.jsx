import React from 'react';
import HeaderCss from './Header.module.css';

const Header = () => {
    return <header className={HeaderCss.header}>
        <img src='/./src/logo.svg' />
    </header>
}

export default Header;