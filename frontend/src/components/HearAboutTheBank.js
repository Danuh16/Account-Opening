import React, { useState ,useContext} from 'react';
import axios from 'axios';
import { Formik, Field } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../components/MultiStepFormContext";
import  "./Hearaboutthebank.css"

export default function HearAboutTheBank() {
  
 /* const [hear, setHear] = useState("");
  const [other, setOther] = useState("");
  const [success, setSuccess] = useState(false);


  const HearAboutTheBank = async (event) => {
    event.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = {
      hear: data.hear,
      other:data.other,
    };
    try {
        const save = await axios.post("/hear", data, axiosConfig);
        setSuccess(true);
    } catch (err) {
        console.log(err.message);
    }
    
  };*/


  const { hearAboutTheBank, setHearAboutTheBank,prev,next } = useContext(MultiStepFormContext);
     console.log(hearAboutTheBank)
  return (
    <Formik
      initialValues={hearAboutTheBank}
      onSubmit={async (values) => {
        axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
            })
      await setHearAboutTheBank(values);
      next();
      }}>
    
    {({ handleSubmit, handleChange,values}) => {

  return (
    <div>
      <div className='hearabout'>
          <label>TV Advertisement 
              <input type={"radio"} name="about" value="tv" onChange={handleChange }></input>
          </label>
            <br/>
          <label> Newspaper Advertisement 
              <input type={"radio"} name="about" value="newspaper" onChange={handleChange }></input>
          </label>
            <br/>
          <label> Customer Referral 
              <input type={"radio"} name="about" value="customer" onChange={handleChange }></input>
          </label>
            <br/>
          <label> Radio Advertisement 
              <input type={"radio"} name="about" value="radio" onChange={handleChange }></input>
          </label>
            <br/>
          <label> Customer relationship personnel 
              <input type={"radio"} name="about" value="personnel" onChange={handleChange }></input>
          </label>
      </div>
          <label style={{padding:'15%',textAlign:'center',fontSize:'larger'}}> Other(Specify): 
              <input type={"text"} id='specify' name='other' value={values.other} onChange={handleChange }></input>
          </label>
      <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'15%',textAlign:'center'}}>
            <Button 
              type={"primary"} 
              onClick={prev}>
                Prev
            </Button>
            <Button 
              type={"primary"} 
              onClick={handleSubmit}>
                Next
            </Button>
       </div> 
    </div>
    );
  }}
     </Formik>
  )
}
