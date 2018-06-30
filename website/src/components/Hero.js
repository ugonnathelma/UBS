import React from "react";
import styled from "styled-components";

import vars from "../vars";
import Button from "./atoms/Button";
import HeroImage from "../images/hero.jpg";

class Hero extends React.Component {
  render() {
    return (
      <HeroFullWidth mobileSize={vars.mobileSize} tabletSize={vars.tabletSize}>
        <div>
          <h1>
            Sign up for customized programmes and acquire real-world business
            skill, knowledge and attitude
          </h1>
          <Button
            color={vars.primaryColor}
            textcolor={vars.whiteColor}
            solid={true}
            to="/programmes"
            value="GET STARTED"
          />
        </div>
      </HeroFullWidth>
    );
  }
}

const HeroFullWidth = styled.div`
  h1 {
    width: 40%;
    text-align: right;
    line-height: 1.5em;
    font-weight: 500;
    color: ${vars.primaryColor};
    background: rgba(255, 255, 255, 0.6);
    padding: 2%;

    @media screen and (min-width: ${props => props.desktopLargeSize + 1}px) {
      margin-top: -6em;
    }

    @media screen and (min-width: ${props =>
        props.mobileSize + 1}px) and (max-width: ${props =>
        props.tabletSize}px) {
      width: 50%;
      font-size: 130%;
      margin-top: -3em;
    }

    @media screen and (max-width: ${props => props.mobileSize}px) {
      font-size: 130%;
      width: 80%;
      margin-top: 9em;
      text-align: center;
    }
  }

  background-image: url(${HeroImage});
  background-repeat: no-repeat;
  background-position: 0px -30px;
  background-size: cover;
  margin-top: -9em;
  height: 57vw;
  display: flex;
  align-content: center;

  & > div {
    align-self: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-right: 4em;

    @media screen and (max-width: ${props => props.mobileSize}px) {
      padding-right: 0em;
    }
  }

  & > div * {
    align-self: flex-end;
    @media screen and (max-width: ${props => props.mobileSize}px) {
      align-self: center;
    }
  }

  @media screen and (min-width: ${props =>
      props.mobileSize + 1}px) and (max-width: ${props => props.tabletSize}px) {
    height: 80vw;
  }

  @media screen and (max-width: ${props => props.mobileSize}px) {
    height: 150vw;
    background-position: 0px 20px;
  }
`;

export default Hero;
