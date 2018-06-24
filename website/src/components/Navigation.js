import React from "react";
import styled from "styled-components";

import vars from "../vars";
import LogoImage from "../images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "../icons/line-menu";

class Navigation extends React.Component {
  state = {
    isLargerThanTablet: window.screen.width > vars.tabletSize
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        isLargerThanTablet: window.screen.width > vars.tabletSize
      });
    });
  }
  
  render() {
    return (
      <FullHeader>
        <SecondaryWrapper>
          <SecondaryHeader id="secondary-header" />
        </SecondaryWrapper>
        <PrimaryWrapper>
          <LogoWrapper>
            <Logo src={LogoImage} />
          </LogoWrapper>
          <PrimaryHeader>
            {this.state.isLargerThanTablet ? (
              <React.Fragment>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/about">ABOUT US</NavLink>
                <NavLink to="/programmes">PROGRAMMES</NavLink>
                <NavLink to="/news">NEWS</NavLink>
                <NavLink to="/contact">CONTACT US</NavLink>
              </React.Fragment>
            ) : (
              <MenuIcon />
            )}
          </PrimaryHeader>
        </PrimaryWrapper>
      </FullHeader>
    );
  }
}

const LogoWrapper = styled.div`
  display: flex;
  flex: 2;
`;

const PrimaryWrapper = styled.div`
  display: flex;
  padding: 0em 4em;
  @media screen and (max-width: ${vars.mobileSize}px) {
    padding: 0em 1em;
  }
`;

const PrimaryHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 8;

  * {
    align-self: center;
    margin-left: 3em;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const SecondaryHeader = styled.div`
  border-top: 3.5em solid ${vars.primaryColor};
  border-left: 90px solid transparent;
  height: 0;
  width: 75%;

  @media screen and (max-width: ${vars.desktopSize}px) {
    width: 70%;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    border-left: 90px solid ${vars.primaryColor};
    width: 100%;
  }
`;

const SecondaryWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FullHeader = styled.div`
  flex: 1;
  background: rgba(24, 39, 58, 0.4);
  min-height: 9em;
  z-index: 1000;
  top: 0px;
  border-top: .5em solid ${vars.primaryColor};
`;

const Logo = styled.img`
  min-width: 180px;
  align-self: center;
  width: 90%;
  max-width: 230px;

  @media screen and (min-width: ${vars.tabletSize+1}px) {
    margin-top: -1.5em;
  }
  @media screen and (max-width: ${vars.tabletSize}px) {
    padding: 1.5em 0em;
  }
`;
export default Navigation;
