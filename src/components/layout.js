import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Navigation from './navigation';
import MobileNavigation from './mobileNavigation';
import Footer from './footer';
import GlobalStyle from '../imports/globalStyle';

const Container = styled.div`
  max-width: 1100px;
  padding: 100px 100px 0;
  border: 2px #dddddd solid;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    border: 0;
  }
  @media screen and (max-width: 695px) {
    border: 0;
    padding: 50px 30px;
  }
`;

const Page = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 40px 0;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 695px) {
    width: 95%;
    margin: 0 auto;
    position: relative;
  }
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
  @media screen and (max-width: 695px) {
    font-size: 26px;
  }
`;

const SiteInfo = styled.div`
  clear: both;
  padding-top: 1.5em;
  display: flex;
  justify-content: space-between;
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  line-height: 2em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: normal;
  font-size: normal;
  color: #bbb;
  text-align: center;
  .email {
    text-align: left;
  }
  .city {
    text-align: right;
  }
  @media screen and (max-width: 695px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const PageDetails = styled.p`
  text-align: center;
  margin: 10px auto;
  font-size: 11px;
  a {
    color: #777;
    &:hover {
      color: #000;
    }
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <title>ZachCossman.com</title>
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js" />
    </Helmet>
    <Container>
      <Logo>
        <Link to="/">Zach Cossman</Link>
      </Logo>
      <SiteInfo>
        <div className="email">ZACHCOS@GMAIL.COM</div>
        <div className="city">NEW YORK, NY</div>
      </SiteInfo>
      <Navigation />
      <MobileNavigation />
      <Page>{children}</Page>
      <Footer />
      <PageDetails>
        ZachCossman.com ||{' '}
        <a href="https://zachcossmandesigns.com" target="_blank">
          ZachCossmanDesigns.com
        </a>{' '}
        &copy; 2019
      </PageDetails>
      <GlobalStyle />
    </Container>
  </React.Fragment>
);
