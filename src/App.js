import React, { useEffect, useState } from "react";
//import { useInView } from "react-intersection-observer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { FourZeroFour } from "./components/FourZeroFour";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
//import "normalize.css";
import "./css/app.min.css";

const App = () => {
  const [logoDisplay, setLogoDisplay] = useState(false);
  const [scrollingDoc, setScrollingDoc] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.scrollingElement.scrollTop >= 100) {
        setScrollingDoc(true);
      }

      if (document.scrollingElement.scrollTop < 100) {
        setScrollingDoc(false);
      }

      if (document.querySelector(".overlay").getBoundingClientRect().top <= 0) {
        setLogoDisplay(true);
      }

      if (document.querySelector(".overlay").getBoundingClientRect().top > 0) {
        setLogoDisplay(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Header scrollingDoc={scrollingDoc} logoDisplay={logoDisplay} />
        <main className={scrollingDoc ? "scrolling" : null}>
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
