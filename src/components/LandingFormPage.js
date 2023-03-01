import React, { useContext } from "react";
import classes from "./css/LandingFormPage.module.css";
import CompanyForm from "./CompanyForm";
import PocForm from "./PocForm";
import UsageForm from "./UsageForm";
import CongratzPage from "./CongratzPage";
import FormContext from "../store/form-context";
import axios from "axios";

function LandingFormPage() {
  
  var customConfig = {
    headers: {
    'Content-Type': 'application/json'
    }
};
  const {
    page,
    setCurrentPage,
    numOfPages,
    formData,
    setFinalData,
    resetDataState,
    validate,
    validation,
  } = useContext(FormContext);
  
  
  const pageSet = () => {
    if (page < numOfPages - 1) {              // jump to next page
      setCurrentPage(page + 1);
    } else if (page === numOfPages - 1) {     // checks if in 2nd last page, all the mandatory fields are filled or not
      if (validate(validation)) {
        setCurrentPage(page + 1);
        console.log(formData);
        var data = JSON.stringify({
          "name": `${formData.Companyname}`,
          "website":`${formData.Websitename}`,
          "location": `${formData.Companylocation}`,
          "poc": {
            "name": `${formData.PocName}`,
            "phone":`${formData.ContactNumber}`,
            "email":`${formData.MailId}`
          },
          "internshipDetails": {
            "domains":`${formData.Domains}`
          },
          additionalPerks: `${formData.Perks}`,
          mode: `${formData.Mode}`
        });
        const result = axios.post('https://icamp-backend.onrender.com/api/companies', data, customConfig);

        console.log(result.data.data); 
        console.log(result.data.headers['Content-Type']);
      } else {
        alert("Your form is incomplete");
      }
    } else if (page === numOfPages) {         // if we are already in the last page, set the collected data into a new state and reset the form to default.
      setFinalData(current => [...current, formData]);
      
      
      resetDataState();
      setCurrentPage(1);
    }
  };
  
  return (
    <div className={classes.form}>
      <div className="card">
        {page === 1 && <CompanyForm />}
        {page === 2 && <PocForm />}
        {page === 3 && <UsageForm />}
        {page === 4 && <CongratzPage />}
        
      </div>
      <button className="button" onClick={pageSet}>
        {page === numOfPages ? `Finish` : `Next`}
      </button>
    </div>
  );
}

export default LandingFormPage;
