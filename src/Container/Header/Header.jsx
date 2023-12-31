import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/order">Order</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/grandpa">Grandpa</Link>
           
        </nav>
    );
};

export default Header;