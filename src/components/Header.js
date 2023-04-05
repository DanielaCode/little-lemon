import React, { useState } from 'react';
import Nav from './Nav';
import Logo from "../assets/Logo.svg";
import styles from "../styles/Header.module.css";

const Header = () => {

    return (
        <header>
            <img className={styles.img} src={Logo}/>
            <Nav></Nav>
        </header>
    );
};

export default Header;