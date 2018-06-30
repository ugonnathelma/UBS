import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Body>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutUs} />
        </Body>
        <Footer />
      </div>
    );
  }
}

const Body = styled.div`
  min-height: 630px;
  padding: 0px;
  margin: 0px;
`;

export default App;
