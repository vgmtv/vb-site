import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  margin: 5px;
  padding: 10px;
  color: #000;
  background-color: #ccc;
  border-radius: 20px;
  text-decoration: none;
`;

const Container = styled.div`
  @media (max-width: 480px) {
    align-self: center;
    margin: 15px 15px;
  }
  &:hover ${Button} {
    background-color: #222;
    color: #fff;
    cursor: pointer;
  }
`;

export default ({title, link}) => (
  <Container>
    <Button target="new" href={link}>{title}</Button>
  </Container>
);
