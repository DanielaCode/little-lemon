import React from 'react'
import Footer from '../components/Footer';
import Main from '../components/Main';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HighLights from '../components/HighLights';
import About from '../components/About';
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
        <Header></Header>
        <Main>
          <div className={styles.flagGreen}>
            <HeroSection/>
          </div>
          <HighLights/>
          <About/>
        </Main>
        <Footer></Footer>
    </div>
  )
}
