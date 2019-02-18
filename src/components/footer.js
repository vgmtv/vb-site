import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;

const CopyRight = styled.span`
  color: #fff;
`;

export default () => {
  const now = new Date();
  return (
    <Container>
      <CopyRight>&copy; VietBible 2009-{now.getFullYear()}</CopyRight>
    </Container>
  );
};
