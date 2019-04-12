import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1100px;
  padding: 100px 100px 0;
  border: 2px #dddddd solid;
  margin: 0 auto;
`;

export default ({ children }) => <Container>{children}</Container>;
