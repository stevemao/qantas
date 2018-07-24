import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const Li = styled.li`
  width: 50%;

  @media (min-width: 768px) {
    width: 90px;
  }
`;

const StyledLink = styled(Link)`
  padding: 0.6em 1em;
  text-decoration: none;
  height: 36px;
  transition: all 0.3s ease;
  font-weight: 700;
  border: 1px solid #4fb37f;
  color: #4fb37f;
  background-color: #fff;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #f2f2f2;
  }
`;

export default function Header() {
  return (
    <header>
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/faqs">Learn more</StyledLink>
        </Li>
      </Ul>
    </header>
  );
}
