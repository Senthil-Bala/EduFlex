import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Form.css";
import Lady from "./lady.png";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any form submission logic here
    console.log(formData);

    // Show toast notification
    toast.success('You will Recieve a call back from us very soon!');

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      phone: ""
    });
  }

  return (
    <div className='form-div container'>
      <form onSubmit={handleSubmit} className="form-element">
        <p style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>Contact Us</p>
        <input type="text" className='textField' placeholder='Name' name='name' value={formData.name} onChange={(e) => handleChange(e)} />
        <input type="email" className='textField' placeholder='Email' name='email' value={formData.email} onChange={(e) => handleChange(e)} />
        <input type="tel" className='textField' placeholder='Phone' name='phone' value={formData.phone} onChange={(e) => handleChange(e)} />
        <button type='submit'>Lets Connect</button>
      </form>
      <div className="contact-img">
        <img src={Lady} alt="" />
      </div>

      {/* Toast notification container with custom styles */}
      <ToastContainer
        className="toastify-container"
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Form;
