import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Class.css";
import classOne from "../assests/classOne.png";
import maths from "./maths.png";
import art from "./art.png";
import sports from "./sports.png"

function Class() {
  return (
    <>
     <p style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>Courses</p>
    <div className='container class'> 
   
    <div className="card-container">
        <Card>
    <Card.Img variant="top" src={classOne} className='card-img' />
      <Card.Body>
        <p>Language and Literacy</p>
        <p className='text-dark'>
        2 Hours
        </p>
        <Button>Enroll Now</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="card-container">
        <Card>
    <Card.Img variant="top" src={maths} className='card-img' />
      <Card.Body>
        <p>Mathematics</p>
        <p className='text-dark'>
        2 Hours
        </p>
        <Button>Enroll Now</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="card-container">
        <Card>
    <Card.Img variant="top" src={art} className='card-img' />
      <Card.Body>
        <p>Art and Creativity</p>
        <p className='text-dark'>
        2 Hours
        </p>
        <Button>Enroll Now</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="card-container">
        <Card>
    <Card.Img variant="top" src={sports} className='card-img' />
      <Card.Body>
        <p>Physical Education</p>
        <p className='text-dark'>
        2 Hours
        </p>
        <Button>Enroll Now</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Class