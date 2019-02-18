import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  background-color: rgb(50, 171, 223);
`;

const MainHeader = styled.h1`
  padding: 0;
  margin: 0.5em;
  margin-bottom: 0;
`

const SubHeader = styled.span`
  font-size: 0.9em;
  padding: 1.2em;
`;

export default () => (
  <Container>
    <MainHeader>VietBible</MainHeader>
    <SubHeader>Ứng dụng nghiên cứu Kinh Thánh tiếng Việt</SubHeader>
  </Container>
);
