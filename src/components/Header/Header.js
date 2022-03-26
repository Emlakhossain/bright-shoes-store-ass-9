import React from 'react';
import './Header.css';
import logo from '../../img/logo (2).png';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/shope">Shope</a>
                <a href="/inventory">Inventory</a>
                <a href="/about us">About Us</a>
            </div>
        </nav>
    );
};

export default Header;