import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1100px;
  padding: 100px 100px 0;
  border: 2px #dddddd solid;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 34px;
  letter-spacing: 3px;
  font-family: 'Varela Round', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: normal;
  line-height: 1em;
  width: 100%;
	text-align: center;
	display: inline-block;
  margin: 0;
  a {
    text-decoration: none;
    color: #222222;
  }
  a:hover {
    color: #555555;
  }
}
`;

export default ({ children }) => (
  <Container>
    <Logo>
      <a href="/">Zach Cossman</a>
    </Logo>
    {children}
  </Container>
);
