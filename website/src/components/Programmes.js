import React from "react";
import styled from "styled-components";
import { Panel } from "react-bootstrap";

import BodyWrapper from "./BodyWrapper";

import ImageMessage from "./ImageMessage";

import Colleagues from "../images/colleagues.png";

import Section from "./Section";

import ProgrammesList from "../../src/programmes";

import vars from "../vars";

class Programmes extends React.Component {
  state = {
    programmeKeys: []
  };

  componentDidMount() {
    const programmeKeys = Object.keys(ProgrammesList);
    this.setState({ programmeKeys });
  }

  render() {
    return (
      <BodyWrapper>
        <ImageMessage background={Colleagues} divider={1} />
        <Section title="OUR TRAINING PROGRAMMES" background={Colleagues}>
          {this.state.programmeKeys.map((category, key) => (
            <div key={key} style={{ marginBottom: "6em", padding: "0em 3em" }}>
              <h3>{category}</h3>
              <hr />
              {ProgrammesList[category].map(programme => {
                return (
                  <Panel key={programme.id} id={`programme${programme.id}`}>
                    <Panel.Heading>
                      <Title toggle>
                        <span>{programme.course}</span>
                        <span>More Info...</span>
                      </Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Body>
                        <span>
                          <span>
                            <strong>Duration:</strong> {programme.duration}
                          </span>
                          <span>
                            <strong>Location: </strong>
                            {programme.location}
                          </span>
                        </span>
                        <span>Fee: ₦{programme.fee}</span>
                      </Body>
                    </Panel.Collapse>
                  </Panel>
                );
              })}
            </div>
          ))}
        </Section>
      </BodyWrapper>
    );
  }
}

const Body = styled(Panel.Body)`
  display: flex;

  span {
    display: block;
    font-size: 120%;
    margin: 1em 0em;
  }

  & > span:first-child {
    flex: 5;
  }

  & > span:last-child {
    flex: 3;
    font-size: 300%;
    font-weight: 500;
    text-align: right;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    flex-direction: column;
    & > span:last-child {
      text-align: center;
    }
  }
`;

const Title = styled(Panel.Title)`
  a {
    display: flex !important;
    justify-content: space-between !important;
    font-weight: bold;
    color: ${vars.primaryColor};
  }

  a span:last-child {
    text-decoration: underline;
    font-weight: 100 !important;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    a {
      flex-direction: column;
    }
  }
`;

export default Programmes;
