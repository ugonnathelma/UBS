import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = props => {
  return (
    <ButtonWrapper {...props}>
      <ButtonLink color={props.textcolor} to={props.to}>
        {props.value}
      </ButtonLink>
    </ButtonWrapper>
  );
};

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`;

const ButtonWrapper = styled.div`
  background: ${props => props.solid && props.color};
  border: 3px solid ${props => (!props.solid ? props.color : "none")};
  text-decoration: none;
  width: 150px;
  padding: 1em;
  font-size: 120%;
  text-align:center;
`;
export default Button;
