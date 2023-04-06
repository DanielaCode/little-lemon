import React,{forwardRef} from 'react';
import styles from "../styles/HighLights.module.css";
import Button from "./Button";
import Card from "./Card";
import lemon from "../assets/lemon.jpg";
import grekSalad from "../assets/grekSalad.jpg";
import restaurantFood from "../assets/restaurantFood.jpg";
import restaurantchef from "../assets/restaurantchef.jpg";


const HighLights=forwardRef((props,ref)=> {

  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }_${Math.random()}`;
  }

  const infoCards=[
    {
      key:generateKey("1"),
      path:lemon,
      title:"Lemon Desert",
      price:"12.99$",
      text:"Lorem ipsum dolor sit amet consectetur. Sagittis consequat convallis eget ut faucibus nec eu fringilla egestas. Nibh suscipit magna blandit ves"
    },
    {
      key:generateKey("2"),
      path: grekSalad,
      title:"Greek Salad",
      price:"19.0$",
      text:"Lorem ipsum dolor sit ametit magna blandit consectetur. Sagittis consequat convallis eget ut faucibus nec eu fringilla egestas. Nibh suscipit magna blandita blandit ves"
    },
    {
      key:generateKey("3"),
      path:restaurantFood,
      title:"Tapas",
      price:"10.99$$",
      text:"Lorem ipsum dolor sit ametit magna blandit conseit magna blanditctetur. Sagittis consequat convallis eget ut faucibus nec eu fringilla egestas. Nibh suscipit magna blandit ves"
    },
    {
      key:generateKey("4"),
      path:restaurantchef,
      title:"Salad",
      price:"18.99$",
      text:"Lorem ipsum dolor sit amet consectetur. Sagittis consequat convallis eget ut faucibus nec eu fringilla egestas. Nibh suscipit magna blandit ves Nibh suscipit magna blandit ves"
    },
  ]

  const cardList = infoCards.map(card =>
      <Card key={card.key} path={card.path} title={card.title} price={card.price} text={card.text} />
);

  return (
    <div className={styles.highLights} ref={ref}>
      <div className={styles.orderMenu}>
        <p className='diplay2-text'>This week specials!</p>
        <Button text="Order Menu"/>
      </div>
      <div className={styles.cards}>
         {cardList}
      </div>
    </div>
  )
});
export default HighLights;