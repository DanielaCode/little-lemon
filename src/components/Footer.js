import React from 'react';
import styles from "../styles/Footer.module.css";
import logo from "../assets/logolarge.png";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.nav}>
                    <h3>Navegation</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Reservations</p>
                    <p>Login</p>
                </div>
                <div className={styles.contact}>
                    <h3>Contact</h3>
                    <p>Adress</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </div>
                <div className={styles.sm}>
                    <h3>Social Media Links</h3>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;