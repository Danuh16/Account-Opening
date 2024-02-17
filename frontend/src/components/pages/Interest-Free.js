import React,{useState} from "react";
import {Steps} from "antd";
import {Provider} from "../MultiStepFormContext"
import AccounType from "../Accounttype";
import AccountwithOtherBank from "../AccountwithOtherBank";
import Address from "../Address";
import EmploymentDetails from "../EmploymentDetails";
import ForDisable from "../ForDisable";
import HearAboutTheBank from "../HearAboutTheBank";
import Kin from "../Kin";
import MeansOfIdentification from "../MeansOfIdentification";
import PersonalInfo from "../PersonalInfo";
import UploadImage from "../uploadImage";
import Term from "../Term";
import Header from "../Header";
import Footer from "../Footer";


const {Step}= Steps;
 
const personalInitialState = {
    title: "",
    fullname: "",
    status: "",
    other: "",
    placeofbirth: "",
    numberofchildren: "",
    numberofdependents: "",
    mothername: "",
    nationality: "",
    resident: "",
    dateofbirth: "",
    purposeofaccount: "",
     
    };

const accountInitialState = {
        productType: "",
        wadiahSafekeeping: "",
        amanahCurrent: "",
        mudarabahSaving: "",
        fycAccount: "",
        accountType: "",
        otherTypeOfAccount: "",
       
    };

 const addressInitialState = {
        country: "",
        region: "",
        city: "",
        subCity: "",
        wereda: "",
        houseNo: "",
        telNo: "",
        email: "",
        pOBox: "",
        homeType: "",
    };

const meansOfIdentificationInitialState = {
        means: "",
        otherMean: "",
        idNo: "",
        issueDateId: "",
        expireDate: "",
        cardType: "",
        electronicBankingPreference: "",
        transactionAlertPreference: "",
        chequeCategory: "",
        preConfirm:"",
    };

const employmentDetailInitialState = {
        employment: "",
        otherEmployment: "",
        monthlyIncome: "",
        greater: "",
        averageAnnualIncome: "",
        nameOfEmployer: "",
        profession: "",
        positionHeld: "",
    };

const kinInitialState = {
        titles: "",
        fullnames: "",
        gender: "",
        relationship: "",
        telNumber: "",
        email_k: "",
        country_k: "",
        region_k: "",
        city_k: "",
        subCity_k: "",
        kebele: "",
        houseNo_k: "",
    };

const accountWithOtherBankInitialState = {
        amount: "",
        bankName: "",
        accountNumber: "",
        status:"",
    };

const hearAboutTheBankIintialState = {
        hear: "",
        other: "",
    };

const forDisableInitialState = {
        agree: "",
        date: "",
        interpreterName: "",
        interpreterAddress: "",
        telephoneNumber: "",
    };
    
    const termInitialState = {
        term:"",
    }
 const uploadImageInitialState ={
    
   };


const renderStep = (step) => {
    switch(step){
        case 0:
            return <PersonalInfo/>;
        case 1:
            return<AccounType/>;
        case 2:
            return<Address/> ;
        case 3:
            return<MeansOfIdentification/>;
        case 4:
            return<EmploymentDetails/>;
        case 5:
            return<Kin/>;
        case 6:
            return<AccountwithOtherBank/>;
        case 7:
            return<HearAboutTheBank/>;
        case 8:
            return<ForDisable/>;
        case 9:
            return<Term/>;
        case 10:
            return<UploadImage/>

        defualt:
           return null;
    }
};
const Form = () => {
    
    //const FormTitles = ["Personal Information", "Account Type", "Address", "Means of Identification", "Employment Details", "Details of next of kin", "Account held with other bank(s)", "How do you hear abount the bank", "Filled by applicant that can't read and see and the form read to him/her by a third party", "Upload Image","Terms and Conditions"];
    const [personal, setPersonal] = useState(personalInitialState);
    const [account, setAccount] = useState(accountInitialState);
    const [address, setAddress] = useState(addressInitialState);
    const [meansOfIdentification, setMeansOfIdentification] = useState(meansOfIdentificationInitialState);
    const [employmentDetail, setEmploymentDetail] = useState(employmentDetailInitialState);
    const [kin, setKin] = useState(kinInitialState);
    const [accountWithOtherBank,setAccountWithOtherBank] = useState(accountWithOtherBankInitialState);
    const [hearAboutTheBank,setHearAboutTheBank] = useState(hearAboutTheBankIintialState);
    const [forDisable,setFOrDisableBank] = useState(forDisableInitialState);
    const [term, setTerm] = useState(termInitialState);
    const [uploadImage, setUploadImage] = useState(uploadImageInitialState);
    const [currentStep, setCurrentStep] = useState(0);


    const next = () => {
        if (currentStep === 10) {
          setCurrentStep(0);
          setPersonal(personalInitialState);
          setAccount(accountInitialState);
          setAddress(addressInitialState);
          setMeansOfIdentification(meansOfIdentificationInitialState);
          setEmploymentDetail(employmentDetailInitialState);
          setKin(kinInitialState);
          setAccountWithOtherBank(accountWithOtherBankInitialState);
          setHearAboutTheBank(hearAboutTheBankIintialState);
          setFOrDisableBank(forDisableInitialState);
          setTerm(termInitialState);
          setUploadImage(uploadImageInitialState);
          return;
        }
        setCurrentStep(currentStep + 1);
      };
      
      const prev = () => setCurrentStep(currentStep - 1);
    return(
        <>
        <Header/>
        <Steps current={currentStep} style={{marginTop:'1%'}}>
                <step title={"Personal information"} />
                <step title={"Account type"} />
                <step title={"Address"} />
                <step title={"Means of identification"} />
                <step title={"Employment details"} />
                <step title={"Details of next of Kin"} />
                <step title={"Account With Other Bank"} />
                <step title={"Hear About The Bank"} />
                <step title={"For Disables"} />
                <step title={"Terms and Conditions"} />
                <step title={"Upload Image"} />
              </Steps>
          <div className="form-container">
          <div className="body">
            <Provider value={{  account, setAccount, 
                                next, prev, 
                                personal, setPersonal, 
                                address, setAddress, 
                                meansOfIdentification, setMeansOfIdentification, 
                                employmentDetail, setEmploymentDetail, 
                                kin, setKin, 
                                accountWithOtherBank,setAccountWithOtherBank,
                                hearAboutTheBank,setHearAboutTheBank,
                                forDisable,setFOrDisableBank,
                                term, setTerm,
                                uploadImage, setUploadImage,
                                }}>
            
             
              <main>{renderStep(currentStep)}</main>
            </Provider>
          </div>
          </div>
        
        <Footer/>
        </>
    )
}
export default Form;