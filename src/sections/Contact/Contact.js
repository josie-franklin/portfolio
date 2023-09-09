import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/files/josie-franklin-resume.pdf";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex-row align-center">
        <h2>Contact Me</h2>
        <div className="section-decor"></div>
      </div>
      <div className="contact-content">
        <p className="lets-talk">Let's Talk!</p>
        <p className="contact-text margin-top">
          I'm currently looking for new opportunities. If you like my work and
          have questions, or just want to say hello, feel free to shoot me a
          message!
        </p>
        <div className="contact-buttons flex margin-top">
          <div className="btn-container">
            <Link to="#">
              <button
                className="btn"
                onClick={() => {
                  window.location = "mailto:this.josie.franklin@gmail.com";
                }}
              >
                Email me
              </button>
            </Link>
          </div>
          <div className="btn-container">
            <a href={resume} download="josie-franklin-resume">
              <button className="btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
