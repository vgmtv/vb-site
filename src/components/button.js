import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  color: #000;
  background-color: #ccc;
  border-radius: 20px;
`;

const Container = styled.div`
  &:hover ${Button} {
    background-color: #222;
    color: #fff;
  }
`;

export default ({title, onPress}) => (
  <Container>
    <Button onClick={onPress}>{title}</Button>
  </Container>
);
