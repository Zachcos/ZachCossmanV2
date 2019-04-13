import React from 'react';
import { Link } from 'gatsby';

export default () => (
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
);