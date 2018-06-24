import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutUs} />
      </div>
    );
  }
}

export default App;
