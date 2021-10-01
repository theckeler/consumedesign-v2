import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { FourZeroFour } from "./components/FourZeroFour";
import { Header } from "./components/Header";
import "normalize.css";
import "./css/app.min.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
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
      </Router>
    </>
  );
}

export default App;
