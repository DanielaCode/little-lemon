import React from 'react'
import styles from "../styles/Card.module.css";
import img from "../assets/lemon.jpg"
export default function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img}/>
      <div className={styles.infoContainer}>
        <div className={styles.titlePrice}>
          <p className='card-title-text'>title</p>
          <p className='paragraph-card-text'>$12.99</p>
        </div>
        <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur. Sagittis consequat convallis eget ut faucibus nec eu fringilla egestas. Nibh suscipit magna blandit ves.</p>
        <p className='highligth-text'>Order a delivery <span>+</span></p>
      </div>
    </div>
  )
}
