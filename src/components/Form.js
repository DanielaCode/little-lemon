import React from 'react'
import styles from "../styles/Form.module.css";
import Button from "./Button";
import AvaliableTables from './AvaliableTables'; 
export default function Form() {
  return (
    <div className={styles.formSection}>
      <div className={styles.info}>
        <h1 className='diplay-text'>Little Lemon</h1>
        <p className='sub-title-text'>Reservations</p>
        <p className='lead-text'>Lorem ipsum dolor sit amet consectetur. Vitae velit id pulvinar massa in ut blandit ultrices. Quam sodales diam fermentuLorem ipsum dolor sit amet consectetur. Vitae velit id pulvinar massa in ut blandit ultrices.</p>
      </div>
      <form className={styles.form}>
        <label>Date:
          <input type='date' placeholder='Date'/>
        </label>
        <label>Occasion:
          <select>
            <option>Aniversary</option>
            <option>Birthday</option>
            <option>Engagement</option>
          </select>
        </label>
        <label>Number of seats:
          <input type='number'/>
        </label>
        <AvaliableTables className={styles.allTables}/>
        <Button text="Submit"/>
      </form>
    </div>
  );
}
