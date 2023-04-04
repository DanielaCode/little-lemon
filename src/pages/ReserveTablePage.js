import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Form from  "../components/Form";
import HeroSection from  "../components/HeroSection";
import styles from "../styles/ReserveTablePage.module.css";
import restaurant from '../assets/restaurant.jpg';  

export default function ReserveTablePage() {
  return (
    <div className={styles.container}>
        <Header/>
        <Main>
           <div className={styles.flagGreen}>
            <div className={styles.info}>
                <h1 className='diplay-text'>Little Lemon</h1>
                <p className='sub-title-text'>Reservations</p>
                <p className='lead-text'>Lorem ipsum dolor sit amet consectetur. Vitae velit id pulvinar massa in ut blandit ultrices. Quam sodales diam fermentu.</p>
              </div>
              <img className={styles.img} src={restaurant}/>
           </div>
          <Form/>
        </Main>
        <Footer/>
    </div>
  )
}
