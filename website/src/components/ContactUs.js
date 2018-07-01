import React from "react";
import styled from "styled-components";

import BodyWrapper from "./BodyWrapper";
import ImageMessage from "./ImageMessage";

import ComputerUser from "../images/man-computer.jpg";

import vars from "../vars";

class ContactUs extends React.Component {
  render() {
    return (
      <Wrapper>
        <ImageMessageCustom
          background={ComputerUser}
          style={{ height: "900px", border: "3px solid red" }}
          full={1}
        >
          <IntroMessageCustom position="right">
            <h1>Contact Us</h1>
            <hr />
            <span>
              <h4>Email:</h4>unionsquareng@gmail.com{" "}
            </span>
            <span>
              <h4>Tel:</h4>08054597905, 08130149837, 08056130145
            </span>
            <span>
              <h4>Postal Address:</h4>P.O. Box 413, Ughelli, Delta State.
            </span>
            <span>
              <h4>Location:</h4>Okodiya Layout, Along Michael & Cecilia Ibru
              University Road, <br />Agbarha-Otor, Ughelli North L.G.A, Delta
              State.
            </span>
          </IntroMessageCustom>
        </ImageMessageCustom>
      </Wrapper>
    );
  }
}

const IntroMessage = styled.div`
  padding: 1em;
  width: 40%;
  position: absolute;
  font-size: 120%;
  color: ${vars.darkColor};
  background-color: white;
  margin-left: 5%;
  right: ${props => props.position === "right" && "5%"};
  margin-top: 5em;

  span {
    display: block;
    margin: 1em;
  }

  @media screen and (max-width: ${vars.desktopSize}px) {
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 60%;
  }

  @media screen and (max-width: ${vars.mobileSize}px) {
    margin-left: 0 auto;
    width: 80%;
    margin-top: 8em;
  }
`;

const Wrapper = styled(BodyWrapper)`
  p {
    line-height: 2em;
  }
`;

const ImageMessageCustom = styled(ImageMessage)`
  border: 2px solid red;
`;

const IntroMessageCustom = IntroMessage.extend`
  font-size: 115%;

  p {
    line-height: 1.5em;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    right: 0%;
    left: 0%;
    width: 100%;
    margin: 0 auto;
  }
`;
export default ContactUs;
