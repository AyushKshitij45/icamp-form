import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function CompanyForm() {
  const {setFormData, formData, setValidation} = useContext(FormContext);


  const companyNameHandler = (event)=> {
    setFormData(prevData => ({...prevData, Companyname:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, Companyname:false})) :
     setValidation(prevData => (({...prevData, Companyname:true})));
  }

  const websiteNameHandler = (event)=> {
    setFormData(prevData => ({...prevData, Websitename:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, Websitename:false})) : 
    setValidation(prevData => (({...prevData, Websitename:true})));
  }

  const companyLocationHandler = (event) => {
    setFormData(prevData => ({...prevData, Companylocation:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, Companylocation:false})) :
     setValidation(prevData => ({...prevData, Companylocation:true}));
  }



  return (
    <>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Company Details</h1>
        <p>Tell us about your company.</p>
      </span>
      

      <span className={classes.container}>
        <p>Company Name</p>
        <input className="inputField" type="text" placeholder="Company Name"
         onChange={companyNameHandler} value={formData.Companyname} />
      </span>
      <span className={classes.container}>
        <p>Company Website</p>
        <input className="inputField" type="text" placeholder="Company Website"
         onChange={websiteNameHandler} value={formData.Websitename} />
      </span>

      <span className={classes.container}>
        <p>Company Location</p>
        <input className="inputField" type="text" placeholder="Company Location" 
        onChange={companyLocationHandler} value={formData.Companylocation} />
      </span>

    </>
  );
}

export default CompanyForm;
