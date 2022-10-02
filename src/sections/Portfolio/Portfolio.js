import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";

const Portfolio = () => {
  const [projects] = useState([
    {
      title: "Jokr",
      key: "jokr",
      tech: "Handlebars.js, Sequelize, Heroku",
      description: "Sign up to search for jokes and save them for later.",
      link: "https://damp-bastion-89209.herokuapp.com/login",
      github: "https://github.com/josie-franklin/jokr",
      background: "jokr.png",
    },
    {
      title: "Site Seers",
      key: "site-seers",
      tech: "MongoDB, Express.js, React, Node.js",
      description: "Find campsites near you",
      link: "https://site-seers.herokuapp.com/",
      github: "https://github.com/jorge30fm/SiteSeers",
      background: "site-seers.png",
    },
    {
      title: "Weather Dashboard",
      key: "weather-dash",
      tech: "HTML, CSS, OpenWeather API",
      description: "Check the weather by city.",
      link: "https://josie-franklin.github.io/weather-dashboard/",
      github: "https://github.com/josie-franklin/weather-dashboard",
      background: "weather-dashboard.png",
    },
    {
      title: "Coding Quiz",
      key: "coding-quiz",
      tech: "HTML, CSS, JavaScript",
      description: "Test your coding knowledge in this timed quiz!",
      link: "https://josie-franklin.github.io/coding-quiz/",
      github: "https://github.com/josie-franklin/coding-quiz",
      background: "coding-quiz.png",
    },
    {
      title: "E-Commerce Backend",
      key: "ecommerce",
      tech: "Node.js, MySql, Sequelize",
      description: "The back-end API for an e-commerce site.",
      link: "https://github.com/josie-franklin/e-commerce-backend",
      github: "https://github.com/josie-franklin/e-commerce-backend",
      background: "e-commerce.png",
    },
    {
      title: "Social Network API",
      key: "social-net",
      tech: "Node.js, MongoDB",
      description: "The back-end API for a social network app.",
      link: "https://github.com/josie-franklin/social-network-api",
      github: "https://github.com/josie-franklin/social-network-api",
      background: "social-media.png",
    },
  ]);
  // className={`${menuOpen && "page-cover"}`}
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div
            key={project.key}
            className={`project-container flex ${
              index % 2 && "flex-row-reverse"
            }`}
          >
            <div className="image-card-parent">
              <Link to={project.link} target="blank">
                <img
                  className="image-card-child"
                  src={`${require(`../../assets/images/${project.background}`)}`}
                  alt={project.title}
                ></img>
              </Link>
            </div>
            <div className={`info-card ${index % 2 && "info-card-left"}`}>
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <p>{project.description}</p>
              <Link to={project.github} target="blank">
                <button className="btn">See the repo</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
