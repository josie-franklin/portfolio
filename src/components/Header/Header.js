import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  let prevScroll = window.scrollY || document.documentElement.scrollTop;
  let currentScroll;
  let direction = 0;
  let prevDirection = 0;

  const scrollHandler = function () {
    currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > prevScroll) {
      direction = 2;
    } else if (currentScroll < prevScroll) {
      direction = 1;
    }

    if (direction !== prevDirection) {
      navHandler(direction, currentScroll);
    }

    prevScroll = currentScroll;
  };

  const navHandler = function (direction, currentScroll) {
    const headerEl = document.getElementById("header");
    if (direction === 2) {
      headerEl.classList.add("nav-hide");
      prevDirection = direction;
    } else if (direction === 1) {
      headerEl.classList.remove("nav-hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <header id="header" className="flex-row justify-between align-center">
      <div className="logoplaceholder"></div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
