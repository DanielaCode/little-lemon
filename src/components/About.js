import React, { forwardRef } from 'react'
import styles from "../styles/About.module.css";
import SmallCard from './SmallCard';
import uno from "../assets/1.png";
import dos from "../assets/2.png";
import tres from "../assets/3.png";
import cuatro from "../assets/4.png";
import cinco from "../assets/5.png";

const About=forwardRef((props,ref)=> {
  const generateKey = (pre) => {
    return `${ pre }${Math.random()}${ new Date().getTime() }`;
  }
  const infoSmallCards=[
    {
      key:generateKey("11"),
      name:"Dani",
      img:uno,
      stars:5,
      comments:"t convallis eget ut faucibus nLorem ipsrsit ame",
    },
    {
      key:generateKey("12"),
      name:"Sofi",
      img:dos,
      stars:4,
      comments:"Lllis eget ut faucibus nLorem ipsum dols",
    },
    {
      key:generateKey("13"),
      name:"Juan",
      img:tres,
      stars:5,
      comments:"Lorem uat convallis eget ut faucibus n",
    },
    {
      key:generateKey("14"),
      name:"Vale",
      img:cuatro,
      stars:5,
      comments:"Sagittis consequat convallis egen",
    },
    {
      key:generateKey("15"),
      name:"Bibi",
      img:cinco,
      stars:5,
      comments:"Lorem ipsum dolor sit amet consectt",
    },
  ]
  const cardList = infoSmallCards.map(card=>
        <SmallCard key={card.key} name={card.name} img={card.img} stars={card.stars} comments={card.comments}/>
    );
  return (
    <div className={styles.about} ref={ref}>
      <p className={`${styles.title} diplay2-text`}>What customers say!</p>
      <div className={styles.cardsContainer}>
          {cardList}
      </div>
    </div>
  )
});
export default About;