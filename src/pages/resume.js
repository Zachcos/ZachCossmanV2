import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

import resume from '../../static/images/resume.gif';
import resumePDF from '../../static/images/ZachCossman.pdf';

const DownloadLink = styled.a`
  color: #777;
  &: hover {
    color: #e28161;
  }
`;

const Resume = styled.div`
  padding-top: 15px;
  width: 100%;
  vertical-align: middle;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

export default () => (
  <Layout>
    <DownloadLink href={resumePDF}>Download Headshot / Resume</DownloadLink>
    <Resume>
      <img src={resume} alt="Zach Cossman Resume" />
    </Resume>
  </Layout>
);
