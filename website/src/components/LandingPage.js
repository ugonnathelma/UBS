import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Section from "./Section";
import BlogSection from "./BlogSection";
import styled from "styled-components";
import image from "../images/hero.jpg";

import vars from "../vars";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <HeroBottomText>
          <h2>Discover Career - enhancing courses for lifelong learning.</h2>
          <span>
            <LearnLink to="/about">
              <span>LEARN MORE</span>
              <i className="fa fa-angle-double-right" />
            </LearnLink>
          </span>
        </HeroBottomText>
        <HeroBottomShape id="hero-bottom-shape" />
        <Section title="HOW TO APPLY" background={image}>
          <HowToApply>
            <div>
              <h3>FIND THE RIGHT PROGRAMME</h3>
              <p>
                View our wide variety of specialised{" "}
                <Link to="/programmes">programmes</Link>
              </p>
            </div>
            <div>
              <h3>SUBMIT YOUR APPLICATION</h3>
              <p>
                Fill the <Link to="/">application form</Link> and submit
              </p>
            </div>
            <div>
              <h3>MAKE PAYMENT</h3>
              <p>
                Pay <Link to="/">online</Link> or via{" "}
                <Link to="/">bank transfer</Link>
              </p>
            </div>
          </HowToApply>
        </Section>
        <Section title="LATEST NEWS">
          <BlogSection />
        </Section>
      </React.Fragment>
    );
  }
}

const HowToApply = styled.div`
  display: flex;

  & > div {
    flex: 1;
    padding: 2em;
  }

  p {
    font-size: 120%;
  }

  a {
    color: ${vars.primaryColor};
    font-weight: 400;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    flex-direction: column;
  }
`;

const HeroBottomShape = styled.div`
  border-bottom: 6.5em solid ${vars.primaryColor};
  border-right: 8em solid transparent;
  width: 80%;
  margin-top: -5.2em;
  opacity: 0.9;

  @media screen and (min-width: ${vars.desktopLargeSize + 1}px) {
    margin-top: -5em;
    margin-top: -3.4em;
  }

  @media screen and (min-width: ${vars.desktopSize}px) and (max-width: ${vars.desktopLargeSize}px) {
    margin-top: -5.15em;
  }

  @media screen and (min-width: ${vars.tabletSize}px) and (max-width: ${vars.desktopSize}px) {
    height: 6.5em;
    background: ${vars.primaryColor};
    border: none;
    opacity: 1;
    margin-top: -5em;
    width: 100% !important;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 100% !important;
    background: ${vars.primaryColor};
    border: none;
    margin-top: -7em;
    height: 9.5em !important;
  }
`;

const HeroBottomText = styled.div`
  width: 80%;
  margin-top: -6%;
  position: relative;
  padding: 0em 3em;
  display: flex;
  align-content: center;
  align-items: center;
  color: ${vars.whiteColor};
  z-index: 100;
  font-size: 95%;

  & > *:first-child {
    flex: 4;
    font-weight: 100;
    padding-left: 1em;
  }
  & > *:last-child {
    flex: 1;
    display: flex;
  }

  @media screen and (max-width: ${vars.desktopLargeSize - 1}px) {
    font-size: 80%;
  }

  @media screen and (max-width: ${vars.desktopSize}px) {
    font-size: 70%;
    margin-top: 0em;
    z-index: 100;
    width: 90%;
    align-self: center;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    font-size: 70%;
    flex-direction: column;
    margin-top: 0em;
    width: 75%;
    position: static;
  }
`;

const LearnLink = styled(Link)`
  color: ${vars.whiteColor};
  font-size: 130%;
  text-decoration: none;
  padding-bottom: 7px;
  span {
    border-bottom: 2px solid white;
  }

  &:hover {
    cursor: pointer;
  }

  i {
    font-size: 150%;
    margin-left: 0.7em;
  }
`;
export default LandingPage;
