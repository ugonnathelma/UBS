import React from "react";
import styled from "styled-components";

import BodyWrapper from "./BodyWrapper";

import ImageMessage from "./ImageMessage";

import ComputerUser from "../images/man-computer.jpg";

import Section from "./Section";

import BlogPost from "./BlogPost";

import NewsPosts from "../../src/blogpostsample.json";

class News extends React.Component {
  render() {
    return (
      <Wrapper>
        <Body>
          <ImageMessage background={ComputerUser} divider={1} />
          <Section title="NEWS">
            {NewsPosts.length > 0 ? (
              NewsPosts.map(post => {
                return (
                  <Separator>
                    <BlogPost
                      image={post.image}
                      title={post.headline}
                      summary={post.description}
                      date={post.datePublished}
                      author={post.author}
                      url={post.url}
                    />
                  </Separator>
                );
              })
            ) : (
              <center>
                <h1>No News yet</h1>
              </center>
            )}
          </Section>
          {NewsPosts.length > 0 && (
            <center>
              <PageControls>
                <a>
                  <i className="fa fa-arrow-left" />Previous
                </a>
                <a>
                  Next<i className="fa fa-arrow-right" />
                </a>
              </PageControls>
            </center>
          )}
        </Body>
      </Wrapper>
    );
  }
}

const PageControls = styled.div`
  a {
    text-decoration: none;
    font-size: 150%;
    margin: 0em 3em;
    cursor: pointer;
  }
`;

const Separator = styled.div`
  margin: 3em 0em !important;
`;

const Body = styled(BodyWrapper)``;

const Wrapper = styled.div`
  ${Body} {
    height: 100vh;
  }
  height: 97vh;
`;

export default News;
