import React from 'react'
import styles from "../styles/Form.module.css";
import Button from "./Button";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';

export default function Form() {
  const [confirmation,setConfirmation] = useState(false);
  const formik = useFormik({
    initialValues: {

      date: "",
      occasion:"",
      number:0,

    },

    validationSchema: Yup.object({
      date: Yup.date()
        .required('Required')
        .min(new Date(), "Date cannot be in the past"),
      occasion: Yup.string()
        .required('Required'),
      number: Yup.number()
        .required("Please enter number of seats.")
        .min(0,"number of seats must be greater than 0")
        .max(30,"30 seats max")
        .positive("must be positive")
    }),

    onSubmit: values => {
      setConfirmation(true);
    },
  });

  return (
    <div className={styles.formSection}>
      <div className={styles.info}>
        <h1 className='diplay-text'>Little Lemon</h1>
        <p className='sub-title-text'>Reservations</p>
        <p className='lead-text'>Lorem ipsum dolor sit amet consectetur. Vitae velit id pulvinar massa in ut blandit ultrices. Quam sodales diam fermentuLorem ipsum dolor sit amet consectetur. Vitae velit id pulvinar massa in ut blandit ultrices.</p>
      </div>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor='date'>Date: </label>
          <input
            id='date'
            type='date'
            name='date'
            {...formik.getFieldProps('date')}
          />
          {formik.touched.date && formik.errors.date ? (
            <p className='error'>{formik.errors.date}</p>
             ) : null}
        <label htmlFor='occasion'>Occasion:</label>
          <select
            id='occasion'
            name='occasion'
            {...formik.getFieldProps('occasion')}
          >
            <option></option>
            <option>Aniversary</option>
            <option>Birthday</option>
            <option>Engagement</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <p className='error'>{formik.errors.occasion}</p>
             ) : null}
        <label htmlFor='number'>Number of seats:</label>
          <input
            id='number'
            type='number'
            name='number'
            {...formik.getFieldProps('number')}
          />
          {formik.touched.number && formik.errors.number ? (
            <p className='error'>{formik.errors.number}</p>
             ) : null}
        <Button text="Submit" type="submit"/>
        {confirmation?<div className={styles.confirmation}>confirmed!</div>:null}
      </form>
    </div>
  );
}
