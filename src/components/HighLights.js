import React from 'react'
import styles from "../styles/HighLights.module.css";
import Button from "./Button";
import Card from "./Card";
export default function HighLights() {
  return (
    <div className={styles.highLights}>
      <div className={styles.orderMenu}>
        <p className='diplay2-text'>This week specials!</p>
        <Button text="Order Menu"/>
      </div>
      <div className={styles.cards}>
        <Card/>
      </div>
    </div>
  )
}
