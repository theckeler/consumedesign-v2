import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { FourZeroFour } from "./components/FourZeroFour";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

import "./css/app.min.css";

const App = () => {
  const [logoDisplay, setLogoDisplay] = useState(false);
  const [scrollingDoc, setScrollingDoc] = useState(false);
  // const [currentPage, setcurrentPage] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.scrollingElement.scrollTop >= 100
        ? setScrollingDoc(true)
        : setScrollingDoc(false);

      document.querySelector(".overlay").getBoundingClientRect().top > 0
        ? setLogoDisplay(false)
        : setLogoDisplay(true);
    });
  }, []);

  return (
    <>
      <Router>
        <Header scrollingDoc={scrollingDoc} logoDisplay={logoDisplay} />
        <main className={scrollingDoc ? "scrolling" : ""}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="*">
              <FourZeroFour />
            </Route>
          </Switch>
        </main>
        <Footer scrollingDoc={scrollingDoc} logoDisplay={logoDisplay} />
      </Router>
    </>
  );
};

export default App;
