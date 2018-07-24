import React from "react";
import { lifecycle, withStateHandlers, compose } from "recompose";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.section`
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const Right = styled.section`
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  color: blue;
`;

const Ul = styled.ul`
  list-style-type: decimal;
`;

const Title = styled.h3`
  margin: 18px;
  font-size: 1em;
`;

export function Faqs({ faqs = [], selectedFaq, selectIndex }) {
  return (
    <Wrapper>
      <Left>
        {selectedFaq ? (
          <React.Fragment>
            <h1>{selectedFaq.title}</h1>
            <div>{selectedFaq.body}</div>
          </React.Fragment>
        ) : (
          <span>No question selected</span>
        )}
      </Left>
      <Right>
        <Title>Please select a question:</Title>
        <Ul>
          {faqs.map((faq, index) => (
            <li key={faq.title}>
              <Button onClick={() => selectIndex(index)}>{faq.title}</Button>
            </li>
          ))}
        </Ul>
      </Right>
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
      .then(({ faqs }) => {
        this.setState({ faqs: faqs });
      });
  },
  componentWillUnmount() {
    this.controller.abort();
  }
};

export const initialState = () => ({
  selectedFaq: null
});

export const stateUpdaters = {
  selectIndex: (_, { faqs }) => selectedIndex => {
    return {
      selectedFaq: faqs[selectedIndex]
    };
  }
};

export default compose(
  lifecycle(spec),
  withStateHandlers(initialState, stateUpdaters)
)(Faqs);
