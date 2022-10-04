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
        I'm a <span>full-stack web developer</span> <br />
        specializing in front-end.
      </p>
      {/* <div id="arrow" className="flex justify-center">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002zm4.498-8.522v10.022h3.008l-4.507 4.751-4.507-4.751h3.008v-10.022z"
            fill-rule="nonzero"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default Landing;
