import React, { useState } from "react";
import "../css/header.min.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import Nav from "./Nav";

const Header = ({ logoDisplay, scrollingDoc }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    document.querySelector("header").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
  };

  return (
    <header className={scrollingDoc ? "scrolling" : ""}>
      <div className={`logo ${logoDisplay ? "stuck" : ""}`}>
        <Logo />
      </div>
      {menuOpen ? <Nav handleClick={handleClick} /> : ""}
      <ul id="hamburger" className="hamburger no-list" onClick={handleClick}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </header>
  );
};

export default Header;
