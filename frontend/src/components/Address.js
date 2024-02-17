import React, { useState, useContext } from "react";
import Axios from "axios";
import { Formik, ErrorMessage } from "formik";
import { Button } from "antd";
import * as Yup from 'yup';
import MultiStepFormContext from "../components/MultiStepFormContext";
import "./Address.css";

export default function Address() {
  /*const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [subCity, setSubCity] = useState("");
  const [wereda, setWereda] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [telNo, setTelNo] = useState("");
  const [email, setEmail] = useState("");
  const [pOBox, setPOBox] = useState("");
  const [selected ,setSelected] =  useState("");
  const [success, setSuccess] = useState(false);


 
  const Address = async (event) => {
    event.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = {
      country: country,
      region: region,
      city: city,
      subCity: subCity,
      wereda: wereda,
      houseNo: houseNo,
      telNo: telNo,

      email: email,
      pOBox: pOBox,
      homeType:selected
    };
    try {
        const save = await Axios.post("/address", data, axiosConfig);
        setSuccess(true);
    } catch (err) {
        console.log(err.message);
    }
    
  };
 */

  const addressSchema= Yup.object({
    country: Yup.string()
      .required('Required'),
    city: Yup.string()
      .required('Required'),
    region: Yup.string()
      .required('Required'),
    subcity: Yup.string()
      .required('Required'),
    telnumber: Yup.number()
      .required('Required'),
  });
  
  
  const { address, setAddress,prev, next } = useContext(MultiStepFormContext);
     console.log(address)
  return (
    <Formik
      initialValues={address}
      validationSchema={addressSchema}
      onSubmit={async (values) => {
        Axios.post('http://localhost:4000/form', values)
        .then(response => {
            const data = response.data;
            console.log(data)
            })
      await setAddress(values);
      next();
      }}>
    
    {({ handleSubmit, handleChange,handleBlur,values}) => {
  return (
      <div className="address">
        <div className="permanent">
      
          <br />
          <label>
            Country{" "}
            <input
              type={"text"}
              name="country"
              id="country"
              value={values.country}
              onChange={handleChange }
              onBlur={handleBlur}
            ></input>
          </label>
          <ErrorMessage name="country" />
          <label>
            {" "}
            Region{" "}
            <input
              type={"text"}
              name="region"
              id="region"
              value={values.region}
              onChange={handleChange }
              onBlur={handleBlur}
            ></input>
          </label>
          <ErrorMessage name="region" />
          <br />
          <label>
            {" "}
            City{" "}
            <input
              type={"text"}
              name="city"
              id="city"
              value={values.city}
              onChange={handleChange }
              onBlur={handleBlur}
            ></input>
          </label>
          <ErrorMessage name="city" />
          <label>
            {" "}
            Sub City{" "}
            <input
              type={"text"}
              name="subcity"
              id="sub"
              value={values.subcity}
              onChange={handleChange }
              onBlur={handleBlur}
            ></input>
          </label>
          <ErrorMessage name="subcity" />
          <br />
          <label>
            Wereda
            <input
              type={"number"}
              id="wereda"
              value={values.wereda}
              onChange={handleChange }
            ></input>
          </label>
          <label>
            {" "}
            House No{" "}
            <input
              type={"text"}
              id="house"
              value={values.houseno}
              onChange={handleChange }
            ></input>
          </label>
          <br />
          <label>
            {" "}
            Tel No{" "}
            <input
              type={"text"}
              name="telnumber"
              id="tel"
              value={values.telnumber}
              onChange={handleChange }
              onBlur={handleBlur}
            ></input>
          </label>
          <ErrorMessage name="telnumber" />
          <label className="email">
            Email:{" "}
            <input
              type={"email"}
              value={values.email}
              onChange={handleChange }
            ></input>
          </label>
          <br />
          <label className="box">
            P.O.Box:{" "}
            <input
              type={"text"}
              value={values.pobox}
              onChange={handleChange }
            ></input>
          </label>
          <br />
          <h4>Home Type: </h4>
          {/* <selectDropdown/>*/}
          <select name="hometype"  onChange={handleChange} value={values.hometype}>
            <option selected disabled>
              click here
            </option>
            <option value="rented">Rented</option>
            <option value="self">Self Owned</option>
            <option value="company">Company Provided</option>
            <option value="mortage">Mortgage</option>
            <option value="withparents">Living with parents</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={"form__item button__items d-flex justify-content-end"} style={{padding:'12%'}}>
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

  );
}

