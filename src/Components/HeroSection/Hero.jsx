import React from "react";
import "./Hero.css";
import heroBanner from "../assests/heroBanner.png"

function Hero() {
  return (
    <div className="container hero-div">
      <div className="hero-banner">
        <img src={heroBanner} alt="Hero" />
      </div>
      <div className="hero-content text-center">
      <p><span className="start">Start</span> your <span className="start">career</span> From Top E-Learning Platform</p>
      <div className="line">
        <p>Class 12th</p>
        <p>Graduates</p>
        <p>Skills</p>
        <p></p>
      </div>
      <button>Enquire Now</button>
      </div>
    </div>
  );
}

export default Hero;
