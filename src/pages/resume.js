import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

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
    <DownloadLink href="http://www.zachcossman.com/wp-content/themes/ZCWP/images/ZachCossman.pdf">
      Download Headshot / Resume
    </DownloadLink>
    <Resume>
      <img src="http://www.zachcossman.com/wp-content/themes/ZCWP/images/resume.gif" alt="Zach Cossman Resume" />
    </Resume>
  </Layout>
);
