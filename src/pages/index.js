import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../imports/globalStyle';
import Layout from '../components/layout';

import headshot from '../../static/images/headshot.jpg';

const PageHeader = styled.h2`
  color: #333333;
  font-family: 'Varela Round', sans-serif;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.2rem;
  margin-bottom: 25px;
`;

const Date = styled.p`
  color: #000;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: italic;
  margin: -20px 0 25px 25px;
`;

const Image = styled.div`
  height: auto;
  margin: 25px auto 0 auto;
  max-width: 100%;
  text-align: center;
  img {
    height: auto;
    max-width: 100%;
  }
`;

export class Index extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader>Back in NYC</PageHeader>
        <Date>Monday, March 4th, 2019</Date>
        <p>
          Zach is back in NYC after playing <span className="emphasis">Jerry Allison</span> in{' '}
          <span className="emphasis">BUDDY: The Buddy Holly Story</span> at Bucks County Playhouse in New Hope, PA.
        </p>
        &nbsp;
        <p>
          This production returned to the Bucks County Playhouse for the 3rd time, after wildly-successful runs in 2016
          and 2017. Zach played Jerry Allison in both of the previous iterations.
        </p>
        &nbsp;
        <p>
          The production ran February 10th – March 3rd, with direction by Hunter Foster and choreography by Lorin
          Latarro.
        </p>
        &nbsp;
        <p>Stay tuned for information about upcoming gigs.</p>
        &nbsp;
        <Image>
          <img src={headshot} alt="Zach Cossman headshot" />
        </Image>
        <GlobalStyle />
      </Layout>
    );
  }
}

export default Index;
