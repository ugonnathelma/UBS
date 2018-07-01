import React from "react";

import styled from "styled-components";
import vars from "../vars";

class ImageMessage extends React.Component {
  render() {
    const { background, divider, full } = this.props;
    return (
      <IntroImage background={background} divider={divider} full={full}>
        {this.props.children}
      </IntroImage>
    );
  }
}

const IntroImage = styled.div`
  background: url(${props => props.background});
  height: ${props => {
    if (!props.divider && !props.full) return "550px";
    if (props.divider && !props.full) return "350px";
    if (props.full) return "97vh";
  }};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${vars.mobileSize}px) {
    background-position: calc(100% + 180px) calc(100% + 0px);
    ${props => (!props.divider ? "690px" : "350px")};
  }

  @media screen and (min-width: ${vars.desktopLargeSize + 1}px) {
    height: ${props => (!props.divider ? "750px" : "50px")};
    line-height: 3em;
    font-size: 140%;
  }
`;

export default ImageMessage;
