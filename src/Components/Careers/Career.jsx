import React from "react";
import "./Career.css"
import Icon from "../assests/icon.png"
import icon1 from './icon1.png';
import icon2 from "./icon2.png";
import icon3 from "./icon3.png"
function Career() {
  return (
    <>
    <p className="careers para fw-bolder " style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>Invest your career with us</p>
    <div className="container career-page">
      
      <div className="col">
        <img src={Icon} alt="" />
        <br />
        <p>Learn anything</p>
        <p>Explore any interest or trending topic and advance your skills</p>
      </div>
      <div className="col">
        <img src={icon1} alt="" />
        <br />
        <p>Flexible learning</p>
        <p>Explore any interest or trending topic and advance your skills</p>
      </div>
      <div className="col">
        <img src={icon2} alt="" />
        <br />
        <p>Save money</p>
        <p>Explore any interest or trending topic and advance your skills</p>
      </div>
      <div className="col">
        <img src={icon3} alt="" />
        <br />
        <p>Unlimited Certificates</p>
        <p>Explore any interest or trending topic and advance your skills</p>
      </div>
    </div>
    </>
  );
}

export default Career;
