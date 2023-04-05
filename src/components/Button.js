import React from 'react'
import styles from "../styles/Button.module.css";

export default function Button(props) {
  return (
    <>
      <button className={`${styles.button} card-title-text`} type={props.type}>
        {props.text}
      </button>
    </>
  )
}
