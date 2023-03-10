import React from 'react';
import logo from "../images/logo.png";
import classes from "./css/LogoHeader.module.css";

function LogoHeader() {
  return (
    
      <div className="register">

          <h1 className={classes.fontlogo}>KIIT Entrepreneurship Cell | Internship Camp 2023</h1>
          <img className={classes.logo} src={logo} alt="" />
      
      
    </div>
  )
}

export default LogoHeader