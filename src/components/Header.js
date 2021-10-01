import "../css/header.min.css";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

const handleClick = (e) => {
  document.querySelector("header").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("active");
};

export function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="logo for Todd Heckeler" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
      <ul id="hamburger" className="hamburger" onClick={handleClick}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </header>
  );
}
