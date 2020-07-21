import React from "react";
import styled from "styled-components";

import logo from "../logo.svg";

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.img.attrs({ src: logo, alt: "Logo" })`
  height: 48px;
`;

const Title = styled.h1`
  margin: 0;
  margin-left: 8px;
`;

const Header = () => (
  <Container>
    <Logo />
    <Title>Workouts</Title>
  </Container>
);

export default Header;
