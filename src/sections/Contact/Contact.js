import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="flex-column justify-center">
      <div className="flex-row align-center">
        <h2>Let's Talk!</h2>
        <div className="section-decor"></div>
      </div>
      <p className="margin-top">
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
    </section>
  );
};

export default Contact;
