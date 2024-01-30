import React from "react";
import "./About.css";
import Company from "./company.png";
import Logos from "./logos.png";

function About() {
  return (
    <div className="wrapper">
    <p className="text-center about-heading" style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>About the Company</p>
    <div className="company-div container">
      
      <div className="company">
        <div className="company-image">
          <img src={Company} alt="Company" id="com" />
        </div>
        <div className="bio">
          <img src={Logos} alt="Eduflex" id="edu" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
