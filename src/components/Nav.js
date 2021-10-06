import { NavLink } from "react-router-dom";
import "../css/nav.min.css";
import Icons from "./Icons";

const Nav = ({ handleClick }) => {
  setTimeout(function () {
    const allLinks = document.querySelectorAll(".link");
    let i = 0;
    allLinks.forEach((link) => {
      setTimeout(function () {
        //console.log(i);
        link.classList.add("active");
      }, 100 * i);
      i++;
    });
  }, 10);

  return (
    <nav>
      <ul className="no-list">
        <li className="link">
          <NavLink to="/" onClick={handleClick}>
            About
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="portfolio" onClick={handleClick}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <Icons />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
