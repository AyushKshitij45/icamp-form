import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function PocForm() {
  const { formData, setFormData,setValidation } = useContext(FormContext);

  const insertPocName = (event) => {
    setFormData((prevData) => ({ ...prevData, PocName: event.target.value }));
    event.target.value === '' ? setValidation(prevData => ({...prevData, PocName:false})) : setValidation(prevData => ({...prevData, PocName:true}));
  };

  const insertContactNumber = (event) => {
    setFormData((prevData) => ({ ...prevData, ContactNumber: event.target.value }));
  };

  const insertMailId = (event) => {
    setFormData((prevData) => ({ ...prevData, MailId: event.target.value }));
  };

  return (
    <>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>POC(Point of Contact)</h1>
        <p>Who can we reach out to?</p>
      </span>


      <span className={classes.container}>
        <p>Name</p>
        <input
          className="inputField"
          type="text"
          placeholder="ex: John Doe"
          onChange={insertPocName}
          value={formData.PocName}
        ></input>
      </span>

      <span className={classes.container}>
        <section className={classes.section}>
          <p>Contact No.</p>
        </section>

        <section className={classes.section}>
          <div className={classes.staticInput}>+91</div>
          <input
            className={`inputField ${classes.contactField}`}
            type="tel"
            placeholder="1234567890"
            onChange={insertContactNumber}
            value={formData.ContactNumber}
          ></input>
        </section>
      </span>

      <span className={classes.container}>
        <p>Mail Id</p>
        <input
          className="inputField"
          type="text"
          placeholder="poc@gmail.com"
          onChange={insertMailId}
          value={formData.MailId}
        ></input>
      </span>
    </>
  );
}

export default PocForm;
