import React from "react";
// import { Parallax } from "react-parallax";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./Landing.css";

const Landing = () => {
  return (
    <section id="landing" className="flex-column justify-center">
      <p className="my-name-is">Hi, my name is</p>
      <div id="name-container">
        <h1 id="name">Josie Franklin.</h1>
        <h1 id="name-shadow">Josie Franklin.</h1>
      </div>
      <p id="after-name" className="margin-top">
        I'm a full-stack web developer specializing in front-end.
      </p>
    </section>
  );
};

export default Landing;
