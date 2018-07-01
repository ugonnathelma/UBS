import React from "react";
import styled from "styled-components";

import vars from "../vars";
import LogoImage from "../images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "../icons/line-menu";
import "../fonts/font-awesome.min.css";

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
          <HeaderText>
            <ContactDetails>
              <span>
                <i className="fa fa-phone" />
                <span>
                  <span>0805-459-7905,</span>
                  <span>0813-014-9837,</span>
                  <span>0805-613-0145</span>
                </span>
              </span>
              <span>
                <i className="fa fa-envelope" />
                <span>unionsquareng@gmail.com</span>
              </span>
            </ContactDetails>
            <SocialMedia>
              <i className="fa fa-facebook" />
              <i className="fa fa-twitter" />
            </SocialMedia>
          </HeaderText>
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

const ContactDetails = styled.div`
  flex: 1;
  display: flex;

  @media screen and (min-width: ${vars.tabletSize}px) and (max-width: ${vars.desktopSize}px) {
    flex-direction: column;
  }

  @media screen and (max-width: ${vars.tabletSize - 1}px) {
    flex-direction: column;
    align-self: flex-start !important;

    i {
      margin-left: 0px !important;
    }
  }

  & > span:first-child {
    display: flex;
    flex-direction: row;

    @media screen and (min-width: ${vars.tabletSize}px) and (max-width: ${vars.desktopSize}px) {
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    @media screen and (min-width: ${vars.tabletSize}px) and (max-width: ${vars.desktopSize}px) {
      justify-content: flex-start;
    }

    
  }

  & > span:first-child span {
    @media screen and (max-width: ${vars.tabletSize - 1}px) {
      display: flex;
      justify-content: flex-end;
      margin-bottom: .5em;
      
    }
  }

  span > span {
    margin: 0em 1em;

    @media screen and (max-width: ${vars.mobileSize}px) {
      margin: 0em 0em;
      margin: 0 auto;

      i {
        margin-left: 0em;
      }
    }
  }
`;

const HeaderText = styled.div`
  width: 78%;
  height: 3.5em;
  z-index: 10000;
  display: flex;
  color: ${vars.whiteColor};

  & > * {
    align-self: center;
  }

  i {
    margin-left: 2em;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 100%;
  }

  @media screen and (max-width: ${vars.tabletSize - 1}px) {
    display: flex;
    position: absolute;
    height: 6em;
    flex-direction: column;
    width: 90%;
    padding: 0.3em 0em;
  }
`;

const SocialMedia = styled.div`
@media screen and (max-width: ${vars.tabletSize - 1}px) {
    align-self: flex-start !important;

    *:first-child {
      margin-left:0em;
    }
}
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 2;
`;

const PrimaryWrapper = styled.div`
  display: flex;
  padding: 0em 4em;
  @media screen and (max-width: ${vars.tabletSize - 1}px) {
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
    margin-top: 1em;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 18px;
`;

const SecondaryHeader = styled.div`
  border-top: 3.5em solid ${vars.primaryColor};
  border-left: 90px solid transparent;
  height: 0;
  width: 75%;
  position: absolute;
  right: 0;

  @media screen and (min-width: ${vars.desktopSize + 1}px) {
    width: 80%;
    border-top: 4.5em solid ${vars.primaryColor};
  }

  @media screen and (max-width: ${vars.desktopSize}px) {
    width: 80%;
    border-top: 4.5em solid ${vars.primaryColor};
  }

  @media screen and (min-width: ${vars.tabletSize}px) and (max-width: ${vars.desktopSize - 1}px){
    height: 6%;
    border: none;
    background: ${vars.primaryColor};
    width: 100%;
  }
  
  @media screen and (max-width: ${vars.tabletSize - 1}px) {
    position: relative;
    height: 6.8em;
    background: ${vars.primaryColor};
    width: 100%;
  }
`;

const SecondaryWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0em 4em;

  @media screen and (max-width: ${vars.tabletSize - 1}px) {
    padding: 0em 0em;
  }
`;

const FullHeader = styled.div`
  flex: 1;
  background: rgba(24, 39, 58, 0.4);
  min-height: 9em;
  z-index: 1000;
  top: 0px;
  border-top: 0.5em solid ${vars.primaryColor};
`;

const Logo = styled.img`
  min-width: 180px;
  align-self: center;
  width: 90%;
  max-width: 230px;

  @media screen and (min-width: ${vars.desktopLargeSize}px) {
    margin-top: -2.5em !important;
  }

  @media screen and (min-width: ${vars.tabletSize + 1}px) {
    margin-top: -1.5em;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    padding: 1.5em 0em;
    margin-top: 1em;
  }
`;
export default Navigation;
