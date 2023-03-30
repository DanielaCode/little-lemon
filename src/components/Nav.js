import React from 'react';
import styles from "../styles/Nav.module.css";
const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a className='header-link-text'>Order Online</a></li>
                <li><a className='header-link-text'>About</a></li>
                <li><a className='header-link-text'> Home</a></li>
                <li><a className='header-link-text'>Login</a></li>
                <li><a className='header-link-text'>Reservations</a></li>
            </ul>
        </nav>
    );
};

export default Nav;