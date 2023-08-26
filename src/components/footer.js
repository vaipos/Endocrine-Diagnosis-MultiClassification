import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../App.css';

function Footer() {
  return (
    <div className = "footer">
      <div className = "footerBox">
        <h4><b>Smart Diagnosis</b></h4>
        <h4 className = "footerText">Society of Women Engineers Match Program 2023 | The University of Texas at Dallas</h4>
      </div>  
    </div>
  );
}

export default Footer;