import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  padding: 65px 0;
  &:after {
    background: #eee;
    content: '';
    display: block;
    height: 2px;
    margin: 10px auto 0;
    width: 80%;
  }
  h3 {
    cursor: pointer;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 2px;
    line-height: 2.2rem;
    text-align: center;
  }
  @media screen and (max-width: 695px) {
    display: flex;
  }
`;

const NavDrawer = styled.div`
  display: none;
`;

const MainNav = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  a {
    border: 2px transparent solid;
    color: #777;
    font-family: 'Varela Round', sans-serif;
    font-size: 14px;
    margin: 10px 0;
    letter-spacing: 2px;
    line-height: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    width: 30%;
    &:hover {
      color: #e28161;
      border-bottom: 2px #ccc solid;
    }
  }
  [aria-current='page'] {
    padding-bottom: 2px;
    border-bottom: 2px #ccc solid;
  }
`;

export default class MobileNavigation extends React.Component {
  toggleNav = () => {
    $(document).ready(function() {
      $('#navDrawer').slideToggle();
      return false;
    });
  };

  render() {
    return (
      <MobileNav>
        <h3 onClick={this.toggleNav}>MENU</h3>
        <NavDrawer id="navDrawer">
          <MainNav>
            <Link to="/">News</Link>
            <Link to="/bio">Bio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/photos">Photos</Link>
            <Link to="/contact">Contact</Link>
          </MainNav>
        </NavDrawer>
      </MobileNav>
    );
  }
}
