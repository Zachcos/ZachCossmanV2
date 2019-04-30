import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TopNav = styled.div`
  margin: 50px auto;
  width: 100%;
  text-align: center;
  position: relative;
  @media screen and (max-width: 695px) {
    display: none;
  }
`;

const MainNav = styled.div`
  display: flex;
  background: white;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 3%;
  width: 30%;
  min-width: 400px;
  a {
    border-bottom: 2px transparent solid;
    color: #777;
    font-family: 'Varela Round', sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      color: #e28161;
      padding-bottom: 2px;
      border-bottom: 2px #ccc solid;
    }
  }
  [aria-current='page'] {
    padding-bottom: 2px;
    border-bottom: 2px #ccc solid;
  }
`;

const NavDivider = styled.div`
  position: relative;
  top: -67px;
  font-size: 12px;
  border-bottom-width: 2px;
  border-bottom: 2px solid #ddd;
  z-index: -100;
  @media screen and (max-width: 695px) {
    display: none;
  }
`;

export default () => (
  <React.Fragment>
    <TopNav>
      <MainNav>
        <Link to="/">News</Link>
        <Link to="/bio">Bio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/contact">Contact</Link>
      </MainNav>
    </TopNav>
    <NavDivider />
  </React.Fragment>
);
