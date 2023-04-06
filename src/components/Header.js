import React, { useState,forwardRef } from 'react';
import Nav from './Nav';
import Logo from "../assets/Logo.svg";
import styles from "../styles/Header.module.css";

const Header = forwardRef((props,ref) => {
    
    return (
        <header>
            <img className={styles.img} src={Logo}/>
            <Nav ref={ref} notHome={props.notHome?true:false}></Nav>
        </header>
    );
});

export default Header;