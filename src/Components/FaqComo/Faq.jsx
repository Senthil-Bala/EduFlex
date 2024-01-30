import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./Faq.css";

function Faq() {
  return (
    <div className="faq-container">
      <p className="faq-heading" style={{fontFamily:"kurale",fontSize:"2rem",fontWeight:"900"}}>Frequent Questions And Answers (FAQ)</p>
      <div className="accordion-container">
        <Accordion className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What courses do you offer?</Accordion.Header>
            <Accordion.Body>
              We offer a variety of courses in programming, language learning, design, mathematics, and more. Explore our catalog to find the right course for you!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I enroll in a course?</Accordion.Header>
            <Accordion.Body>
              Enrolling in a course is easy! Simply browse our courses, select the one you're interested in, and click on the "Enroll Now" button. Follow the instructions to complete the enrollment process.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Do you provide certificates upon course completion?</Accordion.Header>
            <Accordion.Body>
              Yes, we provide certificates for most of our courses upon successful completion. These certificates can be a valuable addition to your resume.
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="3">
            <Accordion.Header>How can I access the course materials?</Accordion.Header>
            <Accordion.Body>
              Once you enroll in a course, you'll have access to the course materials through our online learning platform. You can log in anytime, anywhere to access the content.
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
