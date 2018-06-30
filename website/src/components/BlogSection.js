import React from "react";
import styled from "styled-components";
import BlogPost from "./BlogPost";
import GraduateImage from "../images/graduate.jpg";

import vars from '../vars';

class BlogSection extends React.Component {
  render() {
    return (
      <Section>
        <MostRecentPost>
          <BlogPost
            column={1}
            image={GraduateImage}
            title="2018 Curriculum"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
            date="JUN 22, 2018"
            author="JOHN DOE"
            url="/#"
          />
        </MostRecentPost>
        <TwoRecentPosts>
          <BlogPost
            image={GraduateImage}
            title="2018 Curriculum"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
            date="JUN 22, 2018"
            author="JOHN DOE"
            url="/#"
          />
          <BlogPost
            image={GraduateImage}
            title="2018 Curriculum"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
            date="JUN 22, 2018"
            author="JOHN DOE"
            url="/#"
          />
        </TwoRecentPosts>
      </Section>
    );
  }
}
const MostRecentPost = styled.div`
  height: 100%;
  width: 49% !important;
  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 100% !important;
  }
`;

const TwoRecentPosts = styled.div`
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  width: 49% !important;
  justify-content: space-between;

  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 100% !important;
  }
`;

const Section = styled.div`
  display: flex;
  padding: 2em 0em;
  justify-content: space-between;

  @media screen and (max-width: ${vars.tabletSize}px) {
    flex-direction: column;
  }
`;

export default BlogSection;
