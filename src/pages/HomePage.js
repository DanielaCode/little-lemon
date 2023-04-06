import React, { useRef } from 'react'
import Footer from '../components/Footer';
import Main from '../components/Main';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HighLights from '../components/HighLights';
import About from '../components/About';
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  const hlsRef = useRef();
  const aboutRef = useRef();
  return (
    <div className={styles.container}>
        <Header 
        ref={{
          hls:hlsRef,
          about:aboutRef,
        }}
        />
        <Main>
          <div className={styles.flagGreen}>
            <HeroSection/>
          </div>
          <HighLights ref={hlsRef}/>
          <About ref={aboutRef}/>
        </Main>
        <Footer></Footer>
    </div>
  )
}
