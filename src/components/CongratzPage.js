import { CheckCircleIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import { useEffect } from 'react';
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function CongratzPage() {

  const {formData} = useContext(FormContext);

  return (
    <>
      <CheckCircleIcon className={classes.bigIcon}/>
      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Congratulations, {formData.Companyname}!</h1>
        <p>Welcome onboard! You've successfully registered for KIIT I-Camp 2023</p>
      </span>
      <Index></Index>
    </>
  );
}

function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://www.instagram.com/ecell_kiit/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return <></>;
}

export default CongratzPage;
