import React, { useContext } from "react";
import classes from "./css/LandingFormPage.module.css";
import CompanyForm from "./CompanyForm";
import PocForm from "./PocForm";
import UsageForm from "./UsageForm";
import CongratzPage from "./CongratzPage";
import FormContext from "../store/form-context";
import axios from "axios";
import { useState } from "react";

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

  } = useContext(FormContext);
  
  const [buttonText, setButtonText] = useState('Next');

  const pageSet = () => {
    if (page ===1 && formData.Companyname !== "" && formData.Websitename !== "" && formData.Companylocation !=="") {              // jump to next page
      setCurrentPage(page + 1);
    }else if (page === 2 && formData.PocName !== "" && formData.ContactNumber !== "" && formData.MailId !=="") {              // jump to next page
      setCurrentPage(page + 1);
    } else if (page === 3) {  
         // checks if in 2nd last page, all the mandatory fields are filled or not
      if (formData.Companyname !== "" && formData.Websitename !== "" && formData.Companylocation !=="" && formData.PocName !== "" && formData.ContactNumber !== "" && formData.MailId !=="" && formData.Domains !== "" && formData.Skills !== "" && formData.MinD !=="" && formData.MaxD !=="" && formData.MinS !=="" && formData.MaxS !=="" && formData.Skills !=="" && formData.Mode !=="") {
        
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
            "domains":`${formData.Domains}`,
            "skills":`${formData.Skills}`,
            "duration" : {"min": `${formData.MinD}`, "max": `${formData.MaxD}`},
            "stipend" : {"min": `${formData.MinS}`, "max": `${formData.MaxS}`}
          },
          additionalPerks: `${formData.Perks}`,
          mode: `${formData.Mode}`
        });

        setButtonText('Please Wait...');
        document.getElementById("button").disabled = true;
        
        axios.post('https://icamp-backend.onrender.com/api/companies', data, customConfig).then(response => { 
          setButtonText('Redirecting to our Instagram');
          setCurrentPage(page + 1);
          document.getElementById("button").disabled = false;
          
        }).catch(error => {
          alert(`There was an error, please try again ${error}`)
          setButtonText('Next');
          document.getElementById("button").disabled = false;
        });
        
      } else {
        alert("Your form is incomplete");
      }
    } else if (page === numOfPages) {         // if we are already in the last page, set the collected data into a new state and reset the form to default.
      document.getElementById("button").disabled = true;
    }
  };
  
  return (
    <div className="outer-container">
      <div className={classes.form}>
        <div className="card">
          {page === 1 && <CompanyForm />}
          {page === 2 && <PocForm />}
          {page === 3 && <UsageForm />}
          {page === 4 && <CongratzPage />}
          
        </div>
        
          
        <button className="button" onClick={pageSet} id="button">
          {buttonText}
        </button>
          
      </div>
    </div>
  );
}

export default LandingFormPage;
