import React, { useState } from 'react'
import styles from '../styles/Table.module.css';
import table from '../assets/table.svg';
import tableSelected from '../assets/tableSelected.svg';
import { tab } from '@testing-library/user-event/dist/tab';

export default function Table(props) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={styles.table}
        onMouseEnter={()=>setSelected(true)}
        onMouseLeave={()=>setSelected(false)}
        >
      <img src={selected?tableSelected:table}/>
    </div>
  )
}
