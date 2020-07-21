import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

const Container = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 8px 16px;
  box-shadow: 0px 2px 2px #eee;
`;

const HomeLink = styled(Link).attrs({ to: "/" })`
  display: flex;
  color: initial;
  text-decoration: none;
`;

const Logo = styled.img.attrs({ src: logo, alt: "Logo" })`
  height: 32px;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 32px;
  margin: 0;
  margin-left: 8px;
`;

const Header = () => (
  <Container>
    <HomeLink to="/">
      <Logo />
      <Title>Workouts</Title>
    </HomeLink>
  </Container>
);

export default Header;
