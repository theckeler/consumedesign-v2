import React, { useEffect, useState } from "react";
import "../css/header.min.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import { FaJsfiddle, FaLinkedin } from "react-icons/fa";

const handleClick = (e) => {
  //this.setMenuOpen(!this.menuOpen);

  document.querySelector("header").classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
};

export function Header({ logoDisplay, scrollingDoc }) {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={scrollingDoc ? "scrolling" : ""}>
      <div className={`logo ${logoDisplay ? "stuck" : ""}`}>
        <Logo />
      </div>
      <nav>
        <ul className="no-list">
          <li>
            <NavLink to="/" onClick={handleClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio" onClick={handleClick}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <ul className="icons no-list">
              <li className="icon">
                <NavLink to="portfolio" onClick={handleClick}>
                  <FaJsfiddle />
                </NavLink>
              </li>
              <li>
                <NavLink to="icon portfolio" onClick={handleClick}>
                  <FaLinkedin />
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <ul id="hamburger" className="hamburger no-list" onClick={handleClick}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </header>
  );
}
