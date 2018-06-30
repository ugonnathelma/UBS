import React from "react";
import styled from "styled-components";

import vars from "../vars";

class Section extends React.Component {
  render() {
    return (
      <Background background={this.props.background}>
        <Title>{this.props.title}</Title>
        <Content>{this.props.children}</Content>
      </Background>
    );
  }
}

const Title = styled.div`
  border-top: 0.7em solid ${vars.primaryColor};
  padding: 0.8em 2.8em;
  background: ${vars.secondaryColor};
  color: ${vars.whiteColor};
  font-size: 1.5em;
  font-weight: 300;
`;

const Content = styled.div`
  background: white;
  width: 90%;
  margin: 0 auto;
  min-height: 100px;

`;
const Background = styled.div`
  background: ${props =>
    props.background ? `url(${props.background})` : vars.whiteColor};
    background-size: cover;
    padding: 0;
    display: flex;
    flex-direction: column;
`;
export default Section;
