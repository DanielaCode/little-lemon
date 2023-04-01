import React from 'react';
import styles from "../styles/Main.module.css";


const Main = (props) => {
    return (
        <main>
          {props.children}
        </main>
    );
};

export default Main;