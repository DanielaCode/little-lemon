import React from 'react'
import styles from "../styles/AvaliableTables.module.css";
import table from '../assets/table.svg';
import Table from './Table';
export default function AvaliableTables() {
  return (
    <div className={styles.avaliableTables}>
      <p className={`diplay2-text ${styles.title}`}>Choose your table:</p>
      <div className={styles.hallContainer}> 
        <div className={styles.hall}>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
        </div>
        <div className={styles.hall}>
        <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
          <Table/>
        </div>
      </div>
    </div>
  )
}
