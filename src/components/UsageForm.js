import React, { useContext } from "react";
import classes from "./css/Form.module.css";
import FormContext from "../store/form-context";

function UsageForm() {
  const { formData, setFormData } = useContext(FormContext);
  const insertName = (event) => {
    setFormData((prevData) => ({ ...prevData, Domains: event.target.value }));
  };
  const insertSkills = (event) => {
    setFormData((prevData) => ({ ...prevData, Skills: event.target.value }));
  };
  const insertMinD = (event) => {
    setFormData((prevData) => ({ ...prevData, MinD: event.target.value }));
  };
  const insertMaxD = (event) => {
    setFormData((prevData) => ({ ...prevData, MaxD: event.target.value }));
  };
  const insertMinS = (event) => {
    setFormData((prevData) => ({ ...prevData, MinS: event.target.value }));
  };
  const insertMaxS = (event) => {
    setFormData((prevData) => ({ ...prevData, MaxS: event.target.value }));
  };
  const insertPerks = (event) => {
    setFormData((prevData) => ({ ...prevData, Perks: event.target.value }));
  };
  const insertMode = (event) => {
    setFormData((prevData) => ({ ...prevData, Mode: event.target.value }));
  };

  const options = [

    { label: 'On-stie', value: 'On-site' },
 
    { label: 'Work From Home', value: 'Work-From-Home' },
 
  ];

  return (
    <>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Internship Details</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </span>
      <span className={classes.container}>
        <p>Domains</p>
        <input
          className="inputField"
          type="text"
          placeholder="ex: Tech, Design"
          onChange={insertName}
          value={formData.Domains}
        ></input>
      </span>

      <span className={classes.container}>
        <p>Skills Required</p>
        <input
          className="inputField"
          type="text"
          placeholder="ex: Javascript, C++"
          onChange={insertSkills}
          value={formData.Skills}
        ></input>
      </span>

      <section className={classes.section}>
        <p>Duration(in months)</p>
      </section>
      <div className={classes.container_row}>
        <span>
          
          <input
            className={`inputField ${classes.amount}`}
            type="number"
            placeholder="Min Duration"
            min="1"
            onChange={insertMinD}
            value={formData.MinD}
          ></input>
        </span>
        
        <span>
          <input
            className={`inputField ${classes.amount}`}
            type="number"
            placeholder="Max Duration"
            min="1"
            onChange={insertMaxD}
            value={formData.MaxD}
          ></input>
        </span>
      </div>


      <section className={classes.section}>
        <p>Stipend(in Rupees)</p>
      </section>
      <div>
        <div className={classes.container_row}>
          
          <span>
            
            <input
              className={`inputField ${classes.amount}`}
              type="number"
              placeholder="Min Stipend"
              min="3000"
              onChange={insertMinS}
              value={formData.MinS}
            ></input>
          </span>
        
          <span >
            <input
              className={`inputField ${classes.amount}`}
              type="number"
              placeholder="Max Stipend"
              min="3000"
              onChange={insertMaxS}
              value={formData.MaxS}
            ></input>
          </span>
        </div>
      </div>
      <span className={classes.container}>
        <p>Additional Perks</p>
        <input
          className="inputField"
          type="text"
          placeholder="Perks"
          onChange={insertPerks}
          value={formData.Perks}
        ></input>
      </span>

      <span className={classes.container}>
        <p>Mode of Internship</p>
        <select value={formData.Mode} onChange={insertMode} className="inputField">

          {options.map((option) => (

            <option value={option.value}>{option.label}</option>

          ))}

        </select>
      </span>
      
    </>
  );
}

export default UsageForm;
