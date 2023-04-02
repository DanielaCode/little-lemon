import React from 'react'
import styles from "../styles/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.path}/>
      <div className={styles.infoContainer}>
        <div className={styles.titlePrice}>
          <p className='card-title-text'>{props.title}</p>
          <p className='paragraph-card-text'>{props.price}</p>
        </div>
        <p className='paragraph-text'>{props.text}</p>
        <p className='highligth-text'>Order a delivery <span>+</span></p>
      </div>
    </div>
  )
}
