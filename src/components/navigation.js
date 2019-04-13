import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TopNav = styled.div`
  margin: 50px auto;
  width: 100%;
  text-align: center;
  position: relative;
`;

const MainNav = styled.div`
  display: flex;
  background: white;
  justify-content: space-between;
  margin: 0 auto;
  width: 50%;
  padding: 0 2%;
  min-width: 400px;
  a {
    font-family: 'Varela Round', sans-serif;
    font-size: 12px;
    line-height: 1.6rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    color: #777;
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
`;

export default () => (
  <React.Fragment>
    <TopNav>
      <MainNav>
        <Link to="/">News</Link>
        <Link to="/bio">Bio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/media">Media</Link>
        <Link to="/contact">Contact</Link>
      </MainNav>
    </TopNav>
    <NavDivider />
  </React.Fragment>
);
