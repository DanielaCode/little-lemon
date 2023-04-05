import React from 'react';
import styles from "../styles/Nav.module.css";
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link className='header-link-text'>Order Online</Link></li>
                <li><Link className='header-link-text'>About</Link></li>
                <li><Link to="/" className='header-link-text'> Home</Link></li>
                <li><Link className='header-link-text'>Login</Link></li>
                <li><Link to="/ReserveTable" className='header-link-text'>Reservations</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;