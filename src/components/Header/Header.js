import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="flex-row justify-space-between">
      <div className="logoplaceholder"></div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
