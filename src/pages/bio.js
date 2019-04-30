import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

import sitting from '../../static/images/zc_sitting.jpg';

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

const Image = styled.div`
  max-width: 100%;
  height: auto;
  margin: 0 auto 25px auto;
  text-align: center;
  img {
    height: auto;
    max-width: 100%;
  }
`;

export default () => (
  <Layout>
    <Image>
      <img src={sitting} alt="Zach Cossman" />
    </Image>
    <PageHeader>Before moving to NYC, Zach spent his time surrounded by music and the arts.</PageHeader>
    <p>
      Growing up in Fairfield, Ohio, Zach was exposed to music when he began taking drum lessons at the age of 10. His
      love for music evolved into a love for theatre, which led Zach to a four-year journey at Wright State University
      in the BFA Musical Theatre program.
    </p>
    &nbsp;
    <p>
      During his time there, he had the opportunity to be a part of several shows, such as{' '}
      <span className="italic">Hairspray, Sweeney Todd, Titanic, RENT, Anything Goes, Little Women, Hello Dolly,</span>{' '}
      and most memorably, Billy Lawlor in <span className="italic">42nd Street</span>, and Leaf Coneybear in{' '}
      <span className="italic">The 25th Annual Putnam County Spelling Bee.</span>
    </p>
    &nbsp;
    <p>
      In the short time following his graduation, Zach had the opportunity to work on the world-premiere production of{' '}
      <span className="italic">Revolution in the Elbow of Ragnar Agnarsson Furniture Painter</span> Off-Broadway at the
      Minetta Lane theatre. Additionally, Zach has worked regionally at theatres such as Cincinnati Playhouse in the
      Park, Repertory Theatre of St. Louis, Bucks County Playhouse, Theatre Under the Stars, North Carolina Theatre,
      Casa Mañana, and many others.
    </p>
  </Layout>
);
