import React,{ useState,useContext } from 'react';
import axios from 'axios';
import { Formik, ErrorMessage} from "formik";
import { Button } from "antd";
import * as Yup from 'yup';
import MultiStepFormContext from "../components/MultiStepFormContext";
import "./meansofidentification.css";

export default function MeansOfIdentification() {

  /*const [means, setMeans] = useState("");
  const [otherMean, setOtherMean] = useState("");
  const [idNo, setIdNo] = useState("");
  const [issueDateId, setIssueDateId] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cardType, setCardType] = useState("");
  const [electronicBankingPreference, setElectronicBankingPreference] = useState("");
  const [transactionAlertPreference, setTransactionAlertPreference] = useState("");
  const [chequeCategory, setChequeCategory] = useState("");
  const [preConfirm,setPreConfirm] = useState("");
  const [success, setSuccess] = useState(false);


  const MeansOfIdentification = async (event) => {
    event.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = {
      means:data.means,
      otherMean:data.otherMean,
      idNo:data.idNo,
      issueDateId: data.issueDateId,
      expireDate:data.expireDate,
      cardType: data.cardType,
      electronicBankingPreference: data.electronicBankingPreference,
      transactionAlertPreference: data.transactionAlertPreference,
      chequeCategory: data.chequeCategory,
      preConfirm:data.preConfirm,
    };
    try {
        const save = await axios.post("/meansOfIdentification", data, axiosConfig);
        setSuccess(true);
    } catch (err) {
        console.log(err.message);
    }
    
  };*/

  const meansSchema= Yup.string({
    idno: Yup.number()
      .required('Required'),
    issuedateid: Yup.date()
      .required('Required'),
    expiredate: Yup.date()
      .required('Required'),
  });

  const {meansOfIdentification, setMeansOfIdentification,prev, next } = useContext(MultiStepFormContext);
     console.log(meansOfIdentification)
  return (
     <Formik
       initialValues={meansOfIdentification}
       validationSchema={meansSchema}
       onSubmit={async (values,actions) => {
        axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
            })
       await setMeansOfIdentification(values);
       next();
   }}>
 
 {({ handleSubmit, handleChange,handleBlur,values}) => {

  return (
    <div style={{marginBottom:'-60px'}}>
      <div className='means'>
            <label style={{marginLeft:'80px'}}>National ID Card 
             <input type={"radio"} name="means" value="id"
              onChange={handleChange }
              onBlur={handleBlur}
              ></input>
            </label>
            <label className="driver"> Driver's Licence
             <input type={"radio"} name="means" value="licence"
              onChange={handleChange }
              onBlur={handleBlur}
              ></input>
            </label>
            <label className='passport'> Passport
             <input type={"radio"} name="means" value="passport"
              onChange={handleChange }
              onBlur={handleBlur}
              ></input>
            </label>
            <label className='othermean'> Others
              <input type={"text"} id='othermean' value={values.othermean}
               onChange={handleChange }
              ></input>
            </label>
          </div>
          <div className='id'>
            <label style={{marginRight:'10px'}}>ID.No  
              <input type={"text"} 
                  name='idno'
                  value={values.idno}
                  onChange={handleChange }
                  onBlur={handleBlur}
              ></input>
            </label>
            <ErrorMessage name="idno" />
            <label style={{marginRight:'30px'}}> Issue Date ID 
              <input type={"date"} 
                  name='issuedateid'
                  value={values.issuedateid}
                  onChange={handleChange }
                  onBlur={handleBlur}
              ></input>
            </label>
            <ErrorMessage name="issuedateid" />
            <label> Expire Date 
              <input type={"date"} 
                  name='expiredate'
                  value={values.expiredate}
                  onChange={handleChange }
                  onBlur={handleBlur}
              ></input>
            </label>
            <ErrorMessage name="expiredate" />
            </div>
            <div className='select' style={{textAlign:'center'}}>
            <h3 style={{marginRight:'300px'}}>Please choose digital banking services you would like to have</h3>
            <label style={{marginRight:'70px'}}>Card Type:</label> 
            <select id='sel1' name='cardtype'
              onChange={handleChange } value={values.cardtype} >
              <option></option>
              <option  value="debit">Debit Card</option>
              <option  value="credit">Credit Card</option>
              </select>
              <br/>
              <label>Electronic Banking Preference:</label> 
            <select id='sel2' name='electronicbankingpreference' value={values.electronicbankingpreference} onChange={handleChange } >
              <option></option>
              <option value="mobile">Mobile Banking</option>
              <option value="internet">Internet Banking</option>
              </select>
              <br/>
            <label>Transaction Alert Preference:</label>
            <select id='sel3'name='transactionalertpreference' value={values.transactionalertpreference} onChange={handleChange } >
              <option></option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              </select>
            </div>  
            <div className='catagory' style={{textAlign:'center'}}>
            <h4 style={{marginRight:'650px'}}>Cheque Category: </h4>
              <label style={{marginRight:'40px'}}>25 Leaves 
                <input type={"radio"} id="25" name="chequeCategory" value={values.chequecategory}
              onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'80px'}}> 50 Leaves 
                <input type={"radio"} id="50" name="chequeCategory" value={values.chequecategory}
              onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'40px'}}> 100 Leaves 
                <input type={"radio"} id="100" name="chequeCategory" value={values.chequecategory}
              onChange={handleChange }></input>
              </label>
              <br/>
              <label>You will be required to pre confirm any cheque above: </label>
                <input type={"text"} id='preconfirm' value={values.preConfirm}
              onChange={handleChange }></input>
           </div>
           <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'5%',textAlign:'center'}}>
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
