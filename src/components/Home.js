import React from "react";
import styled from "styled-components";
import { lifecycle } from "recompose";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H1 = styled.h1`
  text-align: center;
  margin: 0 0 20px 0;
`;

const Subheading = styled.span`
  text-align: center;
  color: grey;
  display: block;
  margin: 0 0 20px 0;
`;

const Img = styled.img`
  width: 100%;
`;

function Home({ heading, subheading, heroImageUrl }) {
  return (
    <Wrapper>
      <H1>{heading}</H1>
      <Subheading>{subheading}</Subheading>
      <Img src={heroImageUrl} alt="hero" />
    </Wrapper>
  );
}

export const spec = {
  componentDidMount() {
    const AbortController = window.AbortController;
    this.controller = new AbortController();
    const signal = this.controller.signal;
    fetch(
      "https://raw.githubusercontent.com/stevemao/qantas/master/cmsData.json",
      { signal }
    )
      .then(response => response.json())
      .then(({ homepage }) => {
        this.setState({ ...homepage });
      });
  },
  componentWillUnmount() {
    this.controller.abort();
  }
};

export default lifecycle(spec)(Home);
