import React from "react";
import styled from "styled-components";

import vars from "../vars";

class Footer extends React.Component {
  state = {
    year: new Date().getFullYear()
  };

  render() {
    return (
      <Wrapper>Copyright © {this.state.year} - Unionsquare Business School</Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: ${vars.secondaryColor};
  color: ${vars.whiteColor};
  padding: 1em;
  text-align: center;
`;

export default Footer;
