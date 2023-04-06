import React from 'react'
import styles from "../styles/HeroSection.module.css";
import img from "../assets/pizza.webp";
import Button from './Button';

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.info}>
        <h1 className='diplay-text'>Little Lemon</h1>
        <p className='sub-title-text'>Chicago</p>
        <p className='lead-text'>Lorem ipsum dolor sit amet consectetur. Vitae velit id pulvinar massa in ut blandit ultrices. Quam sodales diam fermentu.</p>
        <Button text="Reserve Table"/>
      </div>
      <img src={img} className={styles.img}/>
    </div>
  )
}
