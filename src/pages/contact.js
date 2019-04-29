import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

import agency from '../../static/images/annsteeleagency.png';

const PageHeader = styled.h2`
  font-size: 22px;
  letter-spacing: 2px;
  font-family: 'Varela Round', sans-serif;
  text-transform: none;
  font-weight: 400;
  font-size: normal;
  line-height: 1.2em;
  margin-bottom: 5px;
  color: #333;
  margin-bottom: 25px;
`;

const InfoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding-top: 30px;
  a {
    color: #777;
    &:hover {
      color: #e28161;
    }
  }
`;

export default () => (
  <Layout>
    <PageHeader>Zach is represented by:</PageHeader>
    <InfoContainer>
      <img src={agency} alt="Ann Steele Agency" />
      <p>330 West 42nd St. 18th Floor. New York, NY 10036</p>
      <p>p: 212.629.9112</p>
      <a href="https://annsteeleagency.com" target="_blank">
        www.annsteeleagency.com
      </a>
    </InfoContainer>
    &nbsp;
    <InfoContainer>
      <p>For web design information visit:</p>
      <a href="https://zachcossmandesigns.com" target="_blank">
        www.ZachCossmanDesigns.com
      </a>
    </InfoContainer>
    &nbsp;
    <InfoContainer>
      <p>For personal inquiries, email me at:</p>
      <a href="mailto:Zachcos@gmail.com">Zachcos@gmail.com</a>
    </InfoContainer>
    &nbsp;
  </Layout>
);
