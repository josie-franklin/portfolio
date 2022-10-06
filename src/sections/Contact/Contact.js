import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css"

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex-row align-center">
        <h2>Let's Talk!</h2>
        <div className="section-decor"></div>
      </div>
      <div className="contact-content">
        <p className="margin-top padding">
          I'm currently looking for new opportunities. If you like my work and
          have questions, or just want to say hello, feel free to shoot me a
          message!
        </p>
        <div className="flex justify-center">
          <Link to="#">
            <button
              className="btn margin-top"
              onClick={() => {
                window.location = "mailto:this.josie.franklin@gmail.com";
              }}
            >
              Email me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
