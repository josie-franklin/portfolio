import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin-icon.png";
import stack from "../../assets/images/stack-overflow.png";

const Footer = () => {
  return (
    <footer className="flex align-center justify-center">
      <Link>
        <img src={github} alt="github"></img>
      </Link>
      <Link>
        <img src={linkedin} alt="linkedin"></img>
      </Link>
      <Link>
        <img src={stack} alt="stack overflow"></img>
      </Link>
    </footer>
  );
};

export default Footer;
