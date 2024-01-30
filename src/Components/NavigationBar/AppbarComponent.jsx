import React from "react";
import "./Appbars.css";
import Logos from "./logos.png"

function AppbarComponent() {
  return (
    <div className="appBar">
      <img src={Logos} alt="EduFlex" />
      <div className="mid-contents">
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Blog Us</p>
      </div>
      <div className="btns">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default AppbarComponent;
