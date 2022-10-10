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
              Hey there! My name is Josie. My passion for web design found its
              roots in <span>art and framing</span>. I recently became certified
              in <span>full-stack web development</span>, and I now consider
              color and composition while creating intuitive UI for the best
              user experiences. My <span>managerial experience</span> trained my
              client-facing skills and proved my ability to handle immediate
              requests and resolve conflicts. My{" "}
              <span>background in education</span> fostered my love for learning
              and seeking new challenges.
            </p>
            <p className="about-primary margin-top">
              Here are some technologies I'm using currently.
            </p>
            <ul className="about-skills margin-top flex-row">
              <li id="first-skill">JavaScript</li>
              <li>CSS</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Sql</li>
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
