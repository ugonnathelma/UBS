import React from "react";
import styled from "styled-components";

import Section from "./Section";

import Graduate from "../images/education.jpg";
import Attendees from "../images/attendees.jpg";
import Colleagues from "../images/colleagues.png";

import vars from "../vars";

class AboutUs extends React.Component {
  render() {
    return (
      <Wrapper>
        <IntroImage background={Graduate}>
          <IntroMessage>
            Unionsquare Business School offers high level quality learning,
            flexibility and adaptability to the needs of participants and the
            economy. Our Training and development programmes are designed to
            build business instinct and expertise through mortaring individual
            growth and leadership skills.
          </IntroMessage>
        </IntroImage>

        <Section title="OUR HISTORY">
          <p style={{ fontSize: "150%" }}>
            Unionsquare Business School was set up in 2017 to provide
            experimental learning in areas of management development, economic
            management, budget planning, entrepreneurship and vocational skills
            development, information and communication technology (ICT),
            monitoring and evaluation, personnel management, and accounting and
            financial planning and management. We also engage in policy research
            and consultancy services.
          </p>
        </Section>
        <IntroImage background={Attendees}>
          <IntroMessageCustom position="right">
            <h2>Why Study at Unionsquare?</h2>
            <h4>High quality learning environment</h4>
            <p>
              We are highly valuable to prospective and existing employers who
              are looking for industry – specific up to date skill, knowledge
              and attitude to achieve desired outcomes.
            </p>
            <h4>Government Approved programmes</h4>
            <p>
              Unionsquare Business School is duly accredited by the Nigeria
              Council for Management Development (NCMD) to undertake the
              training and development of manpower in Nigeria and award relevant
              diplomas and certificates of attendance in all our courses.
            </p>
          </IntroMessageCustom>
        </IntroImage>
        <Section background={Colleagues}>
          <DoubleGrid>
            <div>
              <h2>
                Unionsquare – ETPAN Management Development Programmes for the
                service Industry
              </h2>
              <p>
                Our service Industry programmes are designed with quality
                service delivery in mind and are intended for the personnel
                agencies whose activities directly or indirectly impact the
                service sector: Culture and tourism, Immigration, Security and
                Safety, Customs, Banking and Finance, Sports and entertainment,
                environments, health, etc.
              </p>
            </div>
            <div>
              <h2>Unionsquare Management Development Programmes</h2>
              <p>
                This segment of programmes is designed to create an experiential
                learning environment that galvanizes our participants to deliver
                peak performance in their chosen careers. The participant is
                challenged to develop new approaches to address specific needs
                and situations that are either existent or emerging in their
                working environment.
              </p>
            </div>
          </DoubleGrid>
          <hr style={{ width: "80%" }} />
          <DoubleGrid>
            <div>
              <h2>Unionsquare Conferences and Seminars</h2>
              <p>
                Our conferences and seminars provide opportunity to brainstorm
                on topical issues of the day by way of policy analysis, research
                and publication. Upcoming events are normally advertised to the
                general public through emails, official correspondence,
                newspapers and on our website.
              </p>
            </div>
            <div>
              <h2>Unionsquare Publications</h2>
              <p>
                We regularly publish our communiqués, articles, and proceedings
                from conferences and seminars in journals, magazines, occasional
                papers and monographs. To this end, we welcome learned articles
                Nigeria on socio-economic issues in our Unionsquare Policy
                Review Journal.
              </p>
            </div>
          </DoubleGrid>
        </Section>
      </Wrapper>
    );
  }
}

const IntroImage = styled.div`
  background: url(${props => props.background});
  height: ${props => (!props.divider ? "550px" : "350px")};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${vars.mobileSize}px) {
    background-position: calc(100% + 180px) calc(100% + 0px);
    height: 690px;
  }
  @media screen and (min-width: ${vars.desktopLargeSize + 1}px) {
    height: ${props => (!props.divider ? "750px" : "50px")};
    line-height: 3em;
    font-size: 140%;
  }
`;

const IntroMessage = styled.div`
  padding: 1em;
  width: 40%;
  position: absolute;
  font-size: 120%;
  color: ${vars.whiteColor};
  background-color: rgba(0, 0, 0, 0.4);
  margin-left: 5%;
  right: ${props => props.position === "right" && "5%"};

  @media screen and (max-width: ${vars.desktopSize}px) {
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 60%;
  }

  @media screen and (max-width: ${vars.mobileSize}px) {
    margin-left: 0 auto;
    width: 80%;
  }
`;

const Wrapper = styled.div`
  margin-top: -10em;
  p {
    line-height: 2em;
  }
`;

const DoubleGrid = styled.div`
  display: flex;
  padding: 1.5em;
  margin: 1.5em;

  & > * {
    flex: 1;
    padding: 1em;
  }

  p {
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    flex-direction: column;
  }
`;

const IntroMessageCustom = IntroMessage.extend`
  font-size: 115%;

  p {
    line-height: 1.5em;
  }

  @media screen and (max-width: ${vars.tabletSize}px) {
    right: 0%;
    left: 0%;
  }
`;
export default AboutUs;
