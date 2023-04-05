import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Form from  "../components/Form";
import styles from "../styles/ReserveTablePage.module.css";

export default function ReserveTablePage() {
  return (
    <div className={styles.container}>
        <Header/>
        <Main>
          <Form/>
          <img></img>
        </Main>
        <Footer/>
    </div>
  )
}
