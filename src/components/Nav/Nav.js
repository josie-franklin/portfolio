import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <Link>
          <li
            className="nav-link"
            onClick={() => {
              document.getElementById("header").classList.add("nav-hide");
              const about = document.getElementById("about");
              about.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </li>
        </Link>
        <Link>
          <li
            className="nav-link"
            onClick={() => {
              document.getElementById("header").classList.add("nav-hide");
              const portfolio = document.getElementById("portfolio");
              portfolio.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Portfolio
          </li>
        </Link>
        <Link>
          <li
            className="nav-link"
            onClick={() => {
              document.getElementById("header").classList.add("nav-hide");
              const contact = document.getElementById("contact");
              contact.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
