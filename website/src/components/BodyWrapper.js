import React from "react";
import styled from "styled-components";

class BodyWrapper extends React.Component {
  render() {
    return <Body>{this.props.children}</Body>;
  }
}

const Body = styled.div`
  margin-top: -10em;
`;
export default BodyWrapper;
