import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Section from "./Section";
import HeroBottomShape from "./atoms/HeroBottom";
// import BlogSection from "./BlogSection";
import styled from "styled-components";
import image from "../images/hero.jpg";

import vars from "../vars";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <HeroBottomShape />
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
        {/* <Section title="LATEST NEWS">
          <BlogSection />
        </Section> */}
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

export default LandingPage;
