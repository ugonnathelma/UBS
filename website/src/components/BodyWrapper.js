import React from "react";
import styled from "styled-components";
import vars from "../vars";

class BodyWrapper extends React.Component {
  render() {
    return (
      <div>
        <Body>{this.props.children}</Body>
      </div>
    );
  }
}

const Body = styled.div`
  margin-top: -10em;

  @media screen and (min-width: ${vars.tabletSize}) {
    min-height: 97vh;
  }
`;
export default BodyWrapper;
