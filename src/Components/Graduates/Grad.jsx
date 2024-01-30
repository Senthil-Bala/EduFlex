import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Grad.css";
import data from "./data.png";
import coin from "./coin.png";
import role from "./role.png";
import tech from "./tech.png";


function Grad() {
  return (
    <>
      <p style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>Graduates</p>
      <div className="container class">
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={coin} className='card-img' />
            <Card.Body>
              <p>Computer Science and Programming</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={role} className='card-img' />
            <Card.Body>
              <p>Business and Finance</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={data} className='card-img' />
            <Card.Body>
              <p>Data Science and Analysis</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <Card.Img variant="top" src={tech} className='card-img' />
            <Card.Body>
              <p>Graphic Design and Multimedia</p>
              <p className="text-dark">2 Hours</p>
              <Button>Enroll Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Grad;
