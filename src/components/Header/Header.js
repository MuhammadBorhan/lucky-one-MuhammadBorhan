import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>PANACEA-SHOP.COM</h2>
            <ul>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/phones">Phones</a>
            </ul>
        </div>
    );
};

export default Header;