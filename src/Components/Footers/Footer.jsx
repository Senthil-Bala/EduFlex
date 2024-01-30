import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footers-div">
      <div className="col">
        <p className="text-white">Quick Links</p>
        <p>Courses</p>
        <p>Projects</p>
        <p>Success Stories</p>
        <p>About Us</p>
      </div>
      <div className="col">
        <p className="text-white">Follow Us</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
      </div>
      <div className="col">
        <p className="text-white">Contact Details</p>
        <p>eduflex.contact@gmail.com</p>
        <p>Whatsapp : +91 98765 43210</p>
      </div>
    </div>
  );
}

export default Footer;
