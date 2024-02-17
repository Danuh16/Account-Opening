import React, { useState,useContext } from 'react';
import axios from 'axios';
import { Formik, Field } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../components/MultiStepFormContext";
import "./Fordisables.css";

export default function ForDisable() {
   

  const { forDisable, setForDisable,prev, next } = useContext(MultiStepFormContext);
     console.log(ForDisable)
  return (
    <Formik
      initialValues={forDisable}
      onSubmit={async (values) => {
        axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
            })
      await setForDisable(values);
      next();
      }}>
    
    {({ handleSubmit, handleChange,values}) => {

  return (
    <div>
      <div className='agree'>
      <p>
        <input type="checkbox"
            name='agree'
            value={values.agree}
            onChange={handleChange }/>
        I agree to abide by the content of this agreement and acknowledge that it has been truly and audibly read over and explained to me by an interpreter.
      </p>
      </div>
      <div className='interpreter'>
      <label>Date 
        <input type="date" id="date1"
            name='date'
            value={values.date}
            onChange={handleChange }
        />
      </label>
      <br/>
      <label>Interpreter Name 
        <input type="text" id="name"
            name='interpretername'
            value={values.interpretername}
            onChange={handleChange }/>
      </label>
      <br/>
      <label>Interpreter Address 
        <input type="text" id="interpreter"
            name='interpreter.address'
            value={values.interpreteraddress }
            onChange={handleChange }></input>
      </label>
      <br/>
      <label>Telephone Number
        <input type="text" id="number" 
            name='telephonenumber'
            value={values.telephonenumber}
            onChange={handleChange }/>
      </label>
    </div>
    <div className={"form__item button__items d-flex justify-content-end"}style={{padding:'10%',textAlign:'center'}}>
            <Button 
              type={"primary"} 
              onClick={prev}>
                Prev
            </Button>
            <Button 
              type={"primary"} 
              onClick={next}>
                Next
            </Button>
    </div> 
    </div>
    );
  }}
     </Formik>
  )
}
