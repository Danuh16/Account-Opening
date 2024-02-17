import React, { useState } from 'react';
import { Formik } from 'formik';
import Header from '../components/Header';
import axios from "axios";
import '../authentication/login.css';

export default function Admin() {

  const handlesubmit=(e)=>{
      e.preventDefualt();
      const {email,password}=this.state;
      console.log(email,password);
      fetch("/login",{
          method:"POST",
          crossDomain:true,
          headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*"
          },
          body:JSON.stringify({
              email,
              password
          }),
      }).then((res)=>res.json())
       .then((data)=>{
          console.log(data,"userRegister");
          if(data.status == "ok"){
            alert("login successful");
            window.localStorage.setItem("token",data.data);
            window.location.href = "./userSchema";
          }
       });
  } 


  return (
    
  <div>
    <form onSubmit={handlesubmit}>
      <Header/>
  <div className='log'>
      <h1 id="header1">Login</h1>
   <Formik  class="formik" initialValues={{ email: '', password: '' }} validate={values => {
     const errors = {};
          if (!values.email) {
                 errors.email = 'Required';
                } 
             else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                 errors.email = 'Invalid email address';
                }
               return errors;
      }}
          onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => { alert(JSON.stringify(values, null, 2));
          setSubmitting(false);}, 400); }}>

      {({ values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting,}) => (

    <form onSubmit={handleSubmit} id="login">
        <label id="user">Email</label>
        <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
          {errors.email && touched.email && errors.email}
        <br/>
        <label id="user">Password</label>
        <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} required/>
         {errors.password && touched.password && errors.password}
        <br/>
        <button type="submit" disabled={isSubmitting}>Login</button>
        <a href='/Signup'>Signup</a>
        </form>
       )}
   </Formik>
      </div>
      <div className='adminfooter'>
      <footer>
    <div style={{padding:"20px",marginRight:'50%'}}>Copyright© 2022 Amhara Bank S.C. | All Rights Reserved
     <div style={{marginTop:'15px'}}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <a href="https://www.facebook.com/amharabanksc1" ><i class="fa fa-facebook fa-lg"></i></a>
        <a href="https://www.linkedin.com/company/amharabank" ><i class="fa fa-linkedin fa-lg"></i></a>
        <a href="https://t.me/Amhara_Banksc" ><i class="fa fa-telegram fa-lg"></i></a>
        <a href="https://twitter.com/Amharabanksc" ><i class="fa fa-twitter fa-lg"></i></a>
        <a href="https://instagram.com/amhara_banks" ><i class="fa fa-instagram fa-lg"></i></a>
        <a href="https://youtube.com/channel/UC73x9uuGYV0Uxw0EkpVZN8g" ><i class="fa fa-youtube fa-lg"></i></a>
     </div>
    </div>
    </footer>
      </div>
      </form>
  </div>
  )
}
