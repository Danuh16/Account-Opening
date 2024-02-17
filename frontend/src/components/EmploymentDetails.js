import React,{ useState,useContext } from 'react';
import "./Employmentdetails.css";
import { Formik, Field } from "formik";
import { Button } from "antd";
import * as Yup from 'yup';
import MultiStepFormContext from "../components/MultiStepFormContext";
import Axios from "axios";


export default function Employment() {


/*  const [employment, setEmployment] = useState("");
  const [otherEmployment, setOtherEmployment] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [greater, setGreater] = useState("");
  const [averageAnnualIncome, setAverageAnnualIncome] = useState("");
  const [nameOfEmployer, setNameOfEmployer] = useState("");
  const [profession, setProfession] = useState("");
  const [positionHeld, setPositionHeld] = useState("");
  const [success, setSuccess] = useState(false);


  const Employment = async (event) => {
    event.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = {
      employment: data.employment,
      otherEmployment: data.otherEmployment,
      monthlyIncome: data.monthlyIncome,
      greater:data.greater,
      averageAnnualIncome: data.averageAnnualIncome,
      nameOfEmployer: data.nameOfEmployer,
      profession: data.profession,
      positionHeld: data.positionHeld,
    };
    try {
        const save = await Axios.post("/employment", data, axiosConfig);
        setSuccess(true);
    } catch (err) {
        console.log(err.message);
    }
  }*/

 
  const { employmentDetail, setEmploymentDetail,prev, next } = useContext(MultiStepFormContext);
     console.log(employmentDetail)
  return (
    <Formik
      initialValues={employmentDetail}
      onSubmit={async (values) => {
        Axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
            })
      await setEmploymentDetail(values);
      next();
      }}>
    
    {({ handleSubmit, handleChange,values}) => {

  return (
    <div className='details'>
       <div className='Employee' value={values.employment} >
              <label style={{marginRight:'60px'}}>Goverment Sector Employee 
                <input type={"radio"} name="employment" value="goverment" onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'20px'}}> Private Sector Employee 
                <input type={"radio"} name="employment" value="private" onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'-50px'}}> Self Employee
                <input type={"radio"} name="employment" value="self" onChange={handleChange }></input>
              </label>
              <br/>
              <label style={{marginRight:'40px'}}> International Organization Employee 
                <input type={"radio"} name="employment" value="international" onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'90px'}}> NGO Employee 
                <input type={"radio"} name="employment" value="ngo" onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'40px'}}> Diplomat 
                <input type={"radio"} name="employment" value="diplomat" onChange={handleChange }></input>
              </label>
              <br/>
              <label style={{marginRight:'60px'}}> Religious Organization Employee 
                <input type={"radio"} name="employment" value="religious" onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'125px'}}> House Wife 
                <input type={"radio"} name="employment" value="house" onChange={handleChange }></input>
              </label>
              <label style={{marginRight:'35px'}}> Retired 
                <input type={"radio"} name="employment" value="retired" onChange={handleChange }></input>
              </label>
              <br/>
              <label style={{marginLeft:'250px'}}> Unemployed 
                <input type={"radio"} name="employment" value="unemployed" onChange={handleChange }></input>
              </label>
              <label style={{marginLeft:'165px'}}> Student 
                <input type={"radio"} name="employment" value="student" onChange={handleChange }></input>
              </label>
              <label style={{marginLeft:'140px'}}className='othertype'> Other 
                <input type={"text"} value={values.otherEmployment} onChange={handleChange }></input>
              </label>
        </div>
        <div className='income'> 
            <h4 style={{marginRight:'600px',marginBottom:'5px'}}>Monthly Income:</h4>
              <select name="MonthlyIncome"  value={values.monthlyincome} onChange={handleChange }>
                <option selected disabled>click here</option>
                <option value={"birr"}>2000 Birr</option>
                <option value={"birr"}>2001-25,000 Birr</option>
                <option value={"birr"}>25,001-50,000 Birr</option>
                <option value={"birr"}>50,001-100,000 Birr</option>
                <option value={"birr"}>100,001-150,000 Birr</option>
                <option value={"birr"}>150,001-200,000 Birr</option>
              </select>
        </div>
        <div className='average'>
            <br/>
            <label id='greater'>If greater than 200,000 Birr,Please Specify: 
                <input type={"text"} value={values.greater} onChange={handleChange }></input>
            </label>
            <br/>
            <label id='annual'> Average Annual Income 
                <input type={"text"} value={values.averageannualincome} onChange={handleChange }></input>
            </label>
            <br/>
            <label id='employer'> Name of Employer 
                <input type={"text"} value={values.nameofemployer} onChange={handleChange }></input>
            </label>
            <br/>
            <label id='profession'> Profession  
                <input type={"text"} value={values.profession} onChange={handleChange }></input>
            </label>
            <br/>
            <label id='held'> Position Held 
                <input type={"text"} value={values.positionheld} onChange={handleChange }></input>
            </label>
        </div>
        <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'8%'}}>
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
