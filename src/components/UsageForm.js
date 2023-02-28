import React, { useContext } from "react";
import classes from "./css/Form.module.css";
import FormContext from "../store/form-context";

function UsageForm() {
  const { formData, setFormData } = useContext(FormContext);
  const insertName = (event) => {
    setFormData((prevData) => ({ ...prevData, Name: event.target.value }));
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
          placeholder="Name"
          onChange={insertName}
          value={formData.Name}
        ></input>
      </span>

      <section className={classes.section}>
        <p>Duration</p>
      </section>
      <div className={classes.container_row}>
        <span>
          
          <input
            className={`inputField ${classes.amount}`}
            type="number"
            placeholder="Min Duration"
            onChange={insertMinD}
            value={formData.MinD}
          ></input>
        </span>
        
        <span>
          <input
            className={`inputField ${classes.amount}`}
            type="number"
            placeholder="Max Duration"
            onChange={insertMaxD}
            value={formData.MaxD}
          ></input>
        </span>
      </div>


      <section className={classes.section}>
        <p>Stipend</p>
      </section>
      <div>
        <div className={classes.container_row}>
          
          <span>
            
            <input
              className={`inputField ${classes.amount}`}
              type="number"
              placeholder="Min Stipend"
              onChange={insertMinS}
              value={formData.MinS}
            ></input>
          </span>
        
          <span >
            <input
              className={`inputField ${classes.amount}`}
              type="number"
              placeholder="Max Stipend"
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
          placeholder="Name"
          onChange={insertPerks}
          value={formData.Perks}
        ></input>
      </span>

      <span className={classes.container}>
        <p>Mode of Internship</p>
        <input
          className="inputField"
          type="text"
          placeholder="Name"
          onChange={insertMode}
          value={formData.Mode}
        ></input>
      </span>

    </>
  );
}

export default UsageForm;
