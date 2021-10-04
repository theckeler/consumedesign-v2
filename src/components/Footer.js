import React, { useEffect, useState } from "react";
import "../css/footer.min.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import { NavLink } from "react-router-dom";

export function Footer({ logoDisplay, scrollingDoc }) {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className={scrollingDoc ? "scrolling" : ""}>
      <div className={`logo ${logoDisplay ? "stuck" : ""}`}>
        <Logo />
      </div>
    </footer>
  );
}
