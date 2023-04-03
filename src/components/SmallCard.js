import React from 'react'
import styles from "../styles/SmallCard.module.css";
import star from "../assets/star.png";
export default function SmallCard(props) {
  let starts = [];

  for (let i = 0; i < props.stars; i++) {
    starts.push(<img src={star}/>);
  }

  return (
    <div className={styles.card}>
        <div className={styles.startsContainer}>
          {
            starts
          }
        </div>
        <div className={styles.user}>
            <img src={props.img}/>
            <p className='paragraph-text'>{props.name}</p>
        </div>
        <p className="paragraph-text">
          {props.comments}
        </p>
    </div>
  )
}
