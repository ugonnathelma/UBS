import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Programmes from "./components/Programmes";
import News from "./components/News";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Body>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/programmes" component={Programmes} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/news" component={News} />
        </Body>
        <Footer />
      </div>
    );
  }
}

const Body = styled.div`
  padding: 0px;
  margin: 0px;
`;

export default App;
