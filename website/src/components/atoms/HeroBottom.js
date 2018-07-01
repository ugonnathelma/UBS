import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import vars from "../../vars";

class HeroBottom extends React.Component {
  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  top: -6.5em;

  @media screen and (max-width: ${vars.tabletSize}px) {
    top: -8.5em;
  }
`;

const HeroBottomShape = styled.div`
  border-bottom: 6.5em solid ${vars.primaryColor};
  border-right: 8em solid transparent;
  width: 80%;
  opacity: 0.9;
  position: absolute;

  @media screen and (max-width: ${vars.desktopLargeSize}px) {
    width: 90%;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 100%;
    border: none;
    height: 8.5em;
    background: ${vars.primaryColor};
    opacity: 1;
  }
  @media screen and (max-width: ${vars.mobileSize}px) {
    border: none;
    height: 9em;
  }
`;

const HeroBottomText = styled.div`
  height: 6.5em;
  width: 80%;
  position: absolute;
  padding: 0em 3em;
  display: flex;
  align-content: center;
  align-items: center;
  color: ${vars.whiteColor};
  z-index: 100;

  h2,
  a {
    font-size: 195%;
  }

  & > *:first-child {
    flex: 4;
    font-weight: 100;
    padding-left: 1em;
  }
  & > *:last-child {
    flex: 1;
    display: flex;
  }

  @media screen and (max-width: ${vars.desktopLargeSize}px) {
    h2,
    a {
      font-size: 165%;
    }
  }

  @media screen and (max-width: ${vars.desktopSize}px) {
    h2,
    a {
      font-size: 125%;
    }
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 100%;
    flex-direction: column;
    h2,
    a {
      font-size: 110%;
    }
  }
`;

const LearnLink = styled(Link)`
  color: ${vars.whiteColor};
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

export default HeroBottom;
