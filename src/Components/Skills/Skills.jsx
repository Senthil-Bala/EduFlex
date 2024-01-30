import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Skills.css";
// import classOne from "../assests/classOne.png"
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";

function Skills() {
  return (
    <>
      <p style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>Skills</p>
      <div className="container class">
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={one} className="card-img" />
            <Card.Body>
              <p>Introduction of Accounting</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={two} className="card-img" />
            <Card.Body>
              <p>Risk Management and Insurance</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={three} className="card-img" />
            <Card.Body>
              <p>AI and Machine Learning in Finance</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={four} className="card-img" />
            <Card.Body>
              <p>Online trading and Investment</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Skills;
