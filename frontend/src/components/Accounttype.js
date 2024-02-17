import React, { useState , useContext } from 'react';
import Axios from "axios";
import { Formik, ErrorMessage} from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../components/MultiStepFormContext";
import * as Yup from 'yup';
import "./Account.css";

export default function AccountType() {
   
    const { account, setAccount, prev,next } = useContext(MultiStepFormContext);
     console.log(account)
  return (
    <Formik
      initialValues={account}
      //validationSchema={accountSchema}
      onSubmit={async (values) => {
        Axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
        })
      await setAccount(values);
      next();
      }}>
    
    {({ handleSubmit, handleChange,handleBlur,values}) => {
     
  return (
    <form>
    <div className="accounttype">
        <div>
            <h4>Product Type: </h4>
            <select name='producttype' value={values.producttype} onChange={handleChange } >
                <option selected disabled>Click Here to Choose</option>
                <option  value="wadiahsafekeeping" >Wadiah Safekeeping</option>
                <option  value="amanahcurrent" >Amanah Current</option>
                <option  value="mudarabahsaving" >Mudarabah Saving</option>
                <option  value="fycaccount" >FCY Account</option>
                <ErrorMessage name="producttype" />
            </select>
        </div>
        <div>
        <h4>Account Type: </h4>
        <select 
                    name="book"
                    id="book"
                    style={{marginLeft:'1%'}} 
                    value={values.book}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected hidden>
                      Choose account type
                    </option>
                    <optgroup label="Wadiah Safekeeping">
                      <option value="ordinary">Ordinary</option>
                      <option value="women">Women</option>
                      <option value="youth">Youth</option>
                      <option value="teenyouth">Teen Youth</option>
                      <option value="educational">Educational</option>
                      <option value="zakat">Zakat</option>
                      <option value="nikah">Nikah</option>
                      <option value="labbaik">Labbaik</option>
                    </optgroup>
                    <optgroup label="Amanah Current">
                      <option value="cheque">Cheque account</option>
                      <option value="ecx">ECX account</option>
                    </optgroup>
                    <optgroup label="Mudarabah Saving">
                      <option value="ordinary">Ordinary</option>
                      <option value="women">Women</option>
                      <option value="youth">Youth</option>
                      <option value="teenyouth">Teen Youth</option>
                      <option value="educational">Educational</option>
                      <option value="zakat">Zakat</option>
                      <option value="nikah">Nikah</option>
                      <option value="labbaik">Labbaik</option>
                    </optgroup>
                    <optgroup label="FCY Account">
                      <option value="amanahcheque">Amanah Cheque</option>
                      <option value="wadiahsaving">Wadiah Saving</option>
                      <option value="diasporah">Wadiah Diasporah Mortgage</option>
                    </optgroup>
                  </select>
            </div>
            <div id="label" value={values.accounttype}>
            <br/>
               <label>Joint Account </label>
                 <input 
                    type={"radio"} 
                    name="accounttype"
                    value="joint"
                    onChange={handleChange }
                 ></input>
               <label> Fixed Account<input type={"radio"} 
                    name="accounttype"
                    value="fixed"
                    onChange={handleChange }
               ></input></label>
               <label> Other<input type={"radio"} 
                    name="accounttype"
                    value="other"
                    onChange={handleChange }
               ></input></label>
            </div>
            <div>
           <br/>
               <label className="label">Other type of Account; Please Specify: <input 
               type={"text"}
               name='othertypeofaccount'
               value={values.othertypeofaccount}
               onChange={handleChange }
               ></input></label> 
           </div>
           <div className="button" style={{padding:'15%'}}>
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
    </form>
  );
 }}
    </Formik>
  );
};
