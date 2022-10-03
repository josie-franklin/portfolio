import React from "react";

import "./About.css";
import headshot from "../../assets/images/headshot.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="flex-row align-center">
        <h2>About Me</h2>
        <div className="section-decor"></div>
      </div>
      <div className="margin-top">
        <p>
          I am certified a full stack developer with a background in education
          and management. I work with a variety of technologies including HTML,
          CSS, JavaScript, MySql, and MongoDB to create and maintain full-stack
          web applications. My time dealing with art has given me an eye for
          design, color, and composition, and my previous job experience has
          proven my client-facing skills and abilities to handle fast-paced
          environents. I look forward to working with you!
        </p>
        <div className="headshot-container">
          <div className="headshot-bg margin-top">
            <img className="headshot" src={headshot} alt="Headshot"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
