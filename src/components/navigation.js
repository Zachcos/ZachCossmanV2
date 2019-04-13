import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TopNav = styled.div`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  float: left;
`;

export default () => (
  <TopNav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/bio">Bio</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/media">Media</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </TopNav>
);
