import React, { useState } from 'react';
import styles from "../styles/Nav.module.css";
import {Link} from 'react-router-dom';
import arrow from "../assets/down.png";

const Nav = () => {
    const [menu,setMenu] = useState(false);
    const handleOnClick=()=>{
        setMenu(!menu)
        console.log(menu);
    }
    return (
        <nav>
            <div className={styles.menu} onClick={handleOnClick}>
                Menu
                <img src={arrow} className={menu && styles.menuHover}/>
            </div>
            <ul className={menu && styles.navVisible}>
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