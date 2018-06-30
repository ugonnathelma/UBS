import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import vars from "../vars";

class BlogPost extends React.Component {
  render() {
    const { column, image, title, summary, date, author, url } = this.props;
    return (
      <Wrapper column={column}>
        {image && <Image src={image} column={column} />}
        <BlogContent>
          <Title>{title}</Title>
          <Summary>
            {summary}... <Link to={url}>Read More</Link>
          </Summary>
          <DateAuthor>
            <div>{date}</div>
            <div>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
            <div>{author}</div>
          </DateAuthor>
        </BlogContent>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  height: ${props => (props.column ? "550px" : "265px")};
  flex-direction: ${props => (props.column ? "column" : "row-reverse")};
  -webkit-box-shadow: 0px 3px 5px 0px rgba(51, 51, 51, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(51, 51, 51, 1);
  box-shadow: 0px 3px 5px 0px rgba(51, 51, 51, 1);

  @media screen and (max-width: ${vars.tabletSize}px) {
    min-height: ${props => !props.column && "550px"};
    flex-direction: column;
  }
`;

const Image = styled.div`
  background: url(${props => props.src});
  background-size: cover;
  width: ${props => (props.column ? "100%" : "35%")};
  height: ${props => (props.column ? "80%" : "100%")};
  @media screen and (max-width: ${vars.tabletSize}px) {
    width: 100%;
    height: 100%;
  }
`;

const BlogContent = styled.div`
  flex: ${props => (props.column ? "1" : "2")};
  padding: 1em;
`;

const Title = styled.h2`
  font-weight: 400;
`;

const Summary = styled.div`
  padding: 0em 0em 1em;
  @media screen and (max-width: ${vars.tabletSize}px) {
    min-height: 100px;
  }
`;

const DateAuthor = styled.div`
  display: flex;
`;

export default BlogPost;
