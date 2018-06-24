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
        {/* <h1>
          Sign up for customized programmes and acquire real-world business
          skill, knowledge and attitude
        </h1>
        <Button
          color={vars.primaryColor}
          textcolor={vars.whiteColor}
          solid={true}
          to="/programmes"
          value="GET STARTED"
        /> */}
        </div>
      </HeroFullWidth>
    );
  }
}

const HeroFullWidth = styled.div`

  h1{
    width: 40%;
    text-align: right;
    line-height: 1.5em;
    color:${vars.primaryColor};
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
  }

  & > div * {
    align-self: flex-end;
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
