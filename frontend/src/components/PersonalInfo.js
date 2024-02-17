import React,{ useState,useContext } from 'react';
import "./personal.css";
import { useDispatch } from 'react-redux';
import Axios from "axios";
import { Formik, ErrorMessage } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../components/MultiStepFormContext";
import * as Yup from 'yup';




export default function Personal() {



const personalSchema= Yup.object({
  fullname: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  mothername: Yup.string()
    .max(40, 'Must be 40 characters or less')
    .required('Required'),
  nationality: Yup.string()
    .required('Required'),
  dateofbirth: Yup.string()
    .required('Required'),
});

   
const { personal, setPersonal, next } = useContext(MultiStepFormContext);

return (
<Formik
 initialValues={personal}
 validationSchema={personalSchema}
  onSubmit={async (values,actions) => {
    Axios.post('http://localhost:4000/form', values)
    .then(response => {
        const data = response.data;
        console.log(data)
        })
  await setPersonal(values);
  next();
}}>
  

{({ handleSubmit, handleChange,handleBlur,values}) => {

  return (
    <div className='personal'>
      <div className='title'> <label>Title
            <select  style={{marginLeft:'143px'}}  name='title' value={values.title}  onChange={handleChange }>
              <option></option>
              <option value="mr.">Mr.</option>
              <option value="mrs.">Mrs.</option>
              <option value="ms.">Ms.</option>
              <option value="miss.">Miss.</option>
              <option value="dr.">Dr.</option>
              <option value="prof.">Prof.</option>
              <option value="engr.">Engr.</option>
            </select>
            </label></div>
      <div className='fullname'>
        <label> Full Name </label>
        <input type={"text"} 
         value={values.fullname} 
         name="fullname"
         onChange={handleChange}
         onBlur={handleBlur}
         ></input>
         <ErrorMessage name="fullname" />
      </div>
      <label>Marital Status: 
        <select name='status' value={values.status} onChange={handleChange}>
          <option></option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        </label>
      <div className='other'>
        <label> Other(Please specify): <input type={"text"} 
        name="other" 
        value={values.otherStatus} 
        onChange={handleChange}
        ></input></label>
      </div>
      <div className='place'>
        <label>Place of Birth <input type={"text"}  
        name="placeofbirth"
        value={values.placeofbirth} 
        onChange={handleChange}
        ></input></label>
      </div>
      <div className='numofchild'>
        <label> Number of Children <input type={"number"} 
        name="numberofchildren" 
        value={values.numberofchildren} 
        onChange={handleChange}
        ></input></label>
      </div> 
      <div className='numofdependent'>
        <label> Number of Dependents <input type={"number"}  
        name="numberofdependents" 
        value={values.numberofdependents}
        onChange={handleChange}
        ></input></label>
      </div> 
      <div className='mother'>
        <label> Mother's Name  <input type={"text"}  
        name="mothername" 
        value={values.mothername}
        onChange={handleChange}
        onBlur={handleBlur}
        ></input></label>
        <ErrorMessage name="mothername" />
      </div>
      <div className='nationality'>
        <label>Nationality  <input type={"text"} 
        name="nationality" 
        value={values.nationality} 
        onChange={handleChange}
        onBlur={handleBlur}
        ></input></label>
        <ErrorMessage name="nationality" />
      </div>
      <div className='resident'>
        <label>Resident Permit No. <input type={"number"} 
        name="resident" 
        value={values.resident} 
        onChange={handleChange}
        ></input></label>
      </div>
      <div className='birth'>
        <label>Date of Birth <input type={"date"} 
        name="dateofbirth" 
        value={values.dateofbirth} 
        onChange={handleChange}
        onBlur={handleBlur}
        ></input></label>
        <ErrorMessage name="dateofbirth"/>
      </div>
      <div className='purposeofaccount'>
        <label>Purpose of Account  <input type={"text"} 
        name="purposeofaccount" 
        value={values.purposeofaccount} 
        onChange={handleChange}
        ></input></label>
      </div>
      <div className={"form__item button__items d-flex justify-content-end"}>
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
