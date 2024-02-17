import React, { useState, useContext } from 'react';
import Axios from "axios";
import { Formik, Field } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "../components/MultiStepFormContext";
import "./Accountwithother.css";

export default function AccountWithOtherBank() {

const [otherBanks,setOtherBanks]=useState([{value:1,accountNo:''}]);
/*const [amount,setAmount] = useState("");
const [bankName,setBankName] = useState("");
const [accountNumber,setAccountNumber] = useState("");
const [status,setStatus] = useState("");
const [success, setSuccess] = useState(false);

const AccountwithOtherBank = async (event) => {
  event.preventDefault();
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const data = {
    amount: data.amount,
    bankName:data.bankName,
    accountNumber:data.accountNumber,
    status:data.status, 
  };
  try {
    const save = await Axios.post("/accountType", data, axiosConfig);
      setSuccess(true);
  } catch (err) {
      console.log(err);
  }
}*/
const { accountWithOtherBank, setAccountWithOtherBank,prev, next } = useContext(MultiStepFormContext);
     console.log(accountWithOtherBank)
  return (
    <Formik
      initialValues={accountWithOtherBank}
      onSubmit={async (values) => {
        Axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
            })
      await setAccountWithOtherBank(values);
      next();
      }}>
    
    {({ handleSubmit, handleChange,values}) => {


  return (
    <div>
      <div className='amount'>
        <label id='amount'>Amount:</label>
        <br/>
        <input name='Amount' value={values.amount} type="number" onChange={handleChange }>
        </input>
      </div>
      <div className='bankname'>
        <label id='bank'>Bank Name:</label>
        <label id='accnum'>Account Number:</label>
        <br/>
       {otherBanks.map((data)=>{

return <div>
   <select name='bankname' value={1} onChange={handleChange }>
            <option selected disabled>click here</option>
            <option value={values.bankName}>Nib International Bank </option>
            <option value={values.bankName}>Abay Bank </option>
            <option value={values.bankName}>Addis International Bank</option>
            <option value={values.bankName}>Awash International Bank</option>
            <option value={values.bankName}>Bank of Abyssinia</option>
            <option value={values.bankName}>Berhan International Bank</option>
            <option value={values.bankName}>Bunna International Bank</option>
            <option value={values.bankName}>Commercial Bank of Ethiopia</option>
            <option value={values.bankName}>Cooperative Bank of Oromia</option>
            <option value={values.bankName}>Dashen Bank</option>
            <option value={values.bankName}>Debub Global Bank</option>
            <option value={values.bankName}>Enat Bank</option>
            <option value={values.bankName}>Lion International Bank</option>
            <option value={values.bankName}>Oromia International Bank</option>
            <option value={values.bankName}>Hibret Bank</option>
            <option value={values.bankName}>Wegagen Bank</option>
            <option value={values.bankName}>Zemen Bank</option>
            <option value={values.bankName}>Development Bank of Ethiopia</option>
            <option value={values.bankName}>ZamZam Bank</option>
            <option value={values.bankName}>Hijra Bank</option>
            <option value={values.bankName}>Siinqee Bank</option>
            <option value={values.bankName}>Shabelle Bank</option>
            <option value={values.bankName}>Ahadu Bank</option>
            <option value={values.bankName}>Goh Betoch Bank SC</option>
            <option value={values.bankName}>Tsedey Bank</option>
            <option value={values.bankName}>Tsehay Bank</option>
            <option value={values.bankName}>National Bank of Ethiopia</option>
        </select> 
        <input type={"text"} 
          name="accountnumber" 
          placeholder='Type Account number' 
          value={values.accountnumber}
          onChange={handleChange }
          ></input>
  </div>


       })}
        <br/>
        <button onClick={()=>setOtherBanks([...otherBanks,{value:1,accountNo:''}])}>Add</button>
      </div>
      <div className='status'>
      <label id='status' style={{fontSize:'x-large', marginLeft:'26%'}}>Status:</label>
       <select  name='status' value={values.status} onChange={handleChange }>
        <option selected disabled>click here</option>
        <option value="active">Active</option>
        <option value="dormant">Dormant</option>
       </select>
      </div>
      <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'18%',textAlign:'center'}}>
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
