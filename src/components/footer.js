import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-top: solid 2px #ddd;
  border-bottom: solid 2px #ddd;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 80px;
  width: 100%;
  a {
    padding: 0;
    margin: 0;
  }
  i {
    font-size: 40px;
    margin: 0 15px;
    color: #bbb;
    &:last-child {
      /* margin-right: 30px; */
    }
    &:hover {
      color: #e28161;
      transition: color 300ms ease-out;
    }
  }
`;

export default () => (
  <Container>
    <a href="https://twitter.com/zachcossman" target="_blank">
      <i className="fab fa-twitter" />
    </a>
    <a href="https://www.instagram.com/zachcossman" target="_blank">
      <i className="fab fa-instagram" />
    </a>
    <a href="https://www.linkedin.com/in/zach-cossman-6b799572/" target="_blank">
      <i className="fab fa-linkedin" />
    </a>
  </Container>
);
