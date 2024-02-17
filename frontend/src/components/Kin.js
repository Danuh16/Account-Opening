import React,{ useState ,useContext} from 'react';
import axios from 'axios';
import { Formik, Field } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../components/MultiStepFormContext";
import "./Kin.css";

export default function Kin() {

  const { hearAboutTheBank, setHearAboutTheBank,prev, next } = useContext(MultiStepFormContext);
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
      <div className='kin'>
            <label className="title1">Title
            <select name='titles' value={values.titles} onChange={handleChange }>
              <option></option>
              <option value="mr.">Mr.</option>
              <option value="mrs.">Mrs.</option>
              <option value="ms.">Ms.</option>
              <option value="miss.">Miss.</option>
              <option value="dr.">Dr.</option>
              <option value="prof.">Prof.</option>
              <option value="engr.">Engr.</option>
            </select>
            </label>
            <br/>
            <label> Full Name <input type={"text"} id="fullname1" 
                value={values.fullnames} 
                name="fullnames"
                onChange={handleChange }></input></label>
            <br/>
            <label> Date of Birth <input type={"date"} id="birth1" name='dateofbirth' value={values.dateofbirth}
              onChange={handleChange }></input></label>
            <br/>
            <label> Gender: 
              <label id='m'>Male</label>
                <input type={"radio"} name='gender' value={values.gender}
                      onChange={handleChange }></input>
              <label>Female</label>
                <input type={"radio"} name='gender' value={values.gender}
                      onChange={handleChange }></input>
            </label>
            <br/>
            <label> Relationship  <input type={"text"} id ="birth1" name='relationship' value={values.relationship}
              onChange={handleChange }></input></label>
            <br/>
            <label> Tel. Number  <input type={"text"} id="birth1" name='telnumber' value={values.telnumber}
              onChange={handleChange }></input></label>
            <br/>
            <label> Email <input type={"email"} id="email1_k" name='email_k' value={values.email_k}
              onChange={handleChange }></input></label>
            <br/>
            <h3 style={{marginRight:'550px',marginTop: '-10px',marginBottom: '20px'}}> Address:</h3>
            <label> Country <input type={"text"} id="country_k" name='country_k' value={values.country_k}
              onChange={handleChange }></input></label>
            <br/>
            <label> Region <input type={"text"} id="region_k" name='region_k' value={values.region_k}
              onChange={handleChange }></input></label>
            <br/>
            <label> City <input type={"text"} id="city_k" name='city_k' value={values.city}
              onChange={handleChange }></input></label>
            <br/>
            <label> Sub City <input type={"text"} id="subcity_k" name='subcity_k' value={values.subcity_k}
              onChange={handleChange }></input></label>
            <br/>
            <label> Keble/Wereda <input type={"text"} id="kebele" name='kebele' value={values.kebele}
              onChange={handleChange }></input></label>
            <br/>
            <label> House No <input type={"text"} id="houseNo_k" name='houseNo_k' value={values.houseNo_k}
              onChange={handleChange }></input></label>
      </div>
      <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'1%',textAlign:'center'}}>
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
