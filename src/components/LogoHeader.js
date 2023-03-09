import React from 'react';
import logo from "../images/logo.png";
import classes from "./css/LogoHeader.module.css";

function LogoHeader() {
  return (
    <div className={classes.logoBar}>
      <h1 className={classes.fontlogo}>Internship Camp KIIT</h1>
      <img className={classes.logo} src={logo} alt="" />
      
    </div>
  )
}

export default LogoHeader