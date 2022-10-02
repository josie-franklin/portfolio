import React from "react";

import "./About.css";
import headshot from "../../assets/images/headshot.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div>
        <div className="headshot-parent">
          <img className="headshot" src={headshot} alt="Headshot"></img>
        </div>
        <p>
          I am certified a full stack developer with a background in education
          and management. I work with a variety of technologies including HTML,
          CSS, JavaScript, MySql, and MongoDB to create and maintain full-stack
          web applications. My time dealing with art has given me an eye for
          design, color, and composition, and my previous job experience has
          proven my client-facing skills and abilities to handle fast-paced
          environents. I look forward to working with you!
        </p>
      </div>
    </section>
  );
};

export default About;
