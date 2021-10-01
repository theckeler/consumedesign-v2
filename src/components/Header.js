import "../css/header.min.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import { NavLink } from "react-router-dom";
//import { GiLightBackpack } from "react-icons/gi";
//import { HiOutlineDocumentText } from "react-icons/bi";
//import { IoIosDocFaGithubument } from "react-icons/io";
import { FaJsfiddle, FaLinkedin } from "react-icons/fa";

const handleClick = (e) => {
  document.querySelector("header").classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
  //history.push("/dresses?color=blue");
};

export function Header() {
  return (
    <header>
      <div className="logo">
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
