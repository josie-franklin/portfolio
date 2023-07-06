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
      <div className="about-container">
        <div className="about-content">
          <div className="about-text flex-column">
            <p>
              Hey there! My name is Josie. I am a{" "}
              <span>full-stack developer</span> currently working in Cary, NC.
              My <span>background in education</span> fostered my love for
              learning and seeking new challenges, which naturally lead to
              becoming <span>certified in web development</span>. My passion for
              web design found its roots in my <span>art background</span>, while
              my <span>managerial experience</span> and time as a student 
              developed my persistent problem-solving skills. I now consider 
              color, composition, and functionality while creating intuitive UI
              for the best user experiences.
            </p>
            <p className="about-primary margin-top">
              Here are some technologies I'm using currently.
            </p>
            <ul className="about-skills margin-top flex-row">
              <li id="first-skill">React</li>
              <li>Javascript</li>
              <li>Sequelize</li>
              <li>Node.js</li>
              <li>ASP.NET</li>
              <li>EF Core</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="headshot-container">
            <div className="headshot-bg margin-top">
              <img className="headshot" src={headshot} alt="Headshot"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
