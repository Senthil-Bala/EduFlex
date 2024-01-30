import React from "react";
import "./Testimonials.css";
import Circle from "../assests/circle.png";
import Img1 from "./ellipse.png"
import Img2 from "./Ellipse2.png"

function Testimonials() {
  return (
    <div>
      <div className="text-center test-headers container mt-5">
        <p style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>
          More than 1000+ people were Trained <br />
          <span>70% people shared their success story</span>
        </p>
      </div>
      <div className="test-cards">
        <div className="persons">
          <img src={Img1} alt="Andrew" />
          <p id="andrewName">Andrew Taylor / Sydney</p>
          <p id="andrewDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>
        </div>
        <div className="persons">
          <img src={Circle} alt="John" />
          <p id="johnName">John Doe / New York</p>
          <p id="johnDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>
        </div>
        <div className="persons">
          <img src={Img2} alt="Emma" />
          <p id="emmaName">Emma Johnson / London</p>
          <p id="emmaDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
