import React, { useState,useContext } from 'react';
import { Formik, ErrorMessage } from "formik";
import { Button } from "antd";
import * as Yup from 'yup';
import axios from 'axios';
import MultiStepFormContext from "../components/MultiStepFormContext";
import "./Terms.css";

export default function Term() {


  const termSchema = Yup.object().shape({
    agree: Yup.bool().oneOf([true]).required()
  })

  const { term, setTerm,prev,next } = useContext(MultiStepFormContext);
  console.log(term)
  return (
  <Formik
    initialValues={term}
    validationSchema={termSchema}
    onSubmit={async (values) => {
      axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
            })
    await setTerm(values);
    next();
  }}>
  
  {({ handleSubmit,handleChange,values}) => {

  return (
    <div className='terms'>
      <center>
      <div class="scroll">
      <ol>
      <h3>1.General Instruction</h3>
      <li>It is agreed that all transactions between the Bank and undersigned shall be governed by the rules and regulations of the savings account section which are printed on the inside cover of the passbook and subject to all changes therein or additions thereto which shall have been posted in the main office as well branch's for eight consecutive days.</li>
      <li>The Bank has the authority to debit the accounts of the account holder to recover any amount paid to the account holder erroneously.</li>
      <li>In case of a loss of Passbook, Cheque Book, an ATM card, PIN or any account related information the account holder shallimmediately notify the Bank. If the account holder fails to do so, the bank shall not liable for any damage.</li>
      </ol>
      <ol>
      <h3>2.Opening Savings Accounts for Blind/Non-Literate Persons agreement</h3>
      <li>You are authorized to recognize any of the signatures subscribed on the face of this signature card in the payment of funds of the transaction of any business for this account. It is agreed that all transactions betwee n the Bank and the undersigned shall be governed by the rules and regulations of the Savings Account Department which are printed on the inside cover of the passbook and are subject to all changes there in or additions thereto, which shallhave been posted in the Head Office of the Bank for eight consecutive days.</li>
      <li>The blind /illiterate person is well convinced that her or his thumb mark should be put in the presence of the notary/judge/registrar, as the Case may be, for the law so requires.</li>
      <li>In the sole discretion of the Bank, the terms and conditions stated herein above under number 2.2(two) may be left out and replaced by two witnesses in the opening of the account and withdrawal from the account. The witnesses shall be one from the customer side and one bank officer. However, in case no witness presented by the customer side the two witnesses shall be from the bank one shall be the Business Manager or orth Manager.</li>
      <li>If the account has no movement for one year in the case of saving and six months for demand deposit account it will be considered as dormant and will be transferred to Inactive Accounts.</li>
      <li>When there is a discrepancy between the saving passbook and the computer system of the bank,the record on the system shall prevail.</li>
      <li>It is legally prohibited to write a cheque without sufficient fund. I/We checked that the information given herein above is correct and true. 1 am/we are also fully aware of the criminal and civil liability formal operation of accounts. /we have also read and agreed all the Term and Conditions related with the account. I have preferred.</li>
      <li>The account shall be operated strictly in line with the National Bank of Ethiopia directives.</li>
      </ol>
      <div className='check'>
      <p><input name='term' value={values.term} onChange={handleChange} type="checkbox"/>
      I/We checked that the information given here in the above correct and true.I am/We are also fully aware of the criminal and civil liability formal operation of accounts live have also read and agreed all the Terms and Conditions with the account I have preferred.</p>
      <ErrorMessage name="term" />
      </div>
      </div>
      </center>
      <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'3%',textAlign:'center'}}>
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
