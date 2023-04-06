import React, { forwardRef } from 'react';
import Nav from './Nav';
import Logo from "../assets/Logo.svg";
import styles from "../styles/Header.module.css";

const Header = forwardRef((props,ref) => {

    return (
        <header>
            <img className={styles.img} src={Logo} alt='logo of a lemon'/>
            <Nav ref={ref} notHome={props.notHome&&true}></Nav>
        </header>
    );
});

export default Header;