import React from 'react'
import styles from "../styles/Button.module.css";
import {Link} from 'react-router-dom';
export default function Button(props) {
  return (
    <>
      <button className={`${styles.button} card-title-text`} type={props.type}>
        <Link to={props.link&&props.link} >{props.text}</Link>
      </button>
    </>
  )
}
