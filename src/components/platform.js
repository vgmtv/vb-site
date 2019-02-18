import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 7px;
`

const PlatformName = styled.span`
  color: grey;
`

export default ({children, name, version}) => (
  <Container>
    <PlatformName>{name} v{version}</PlatformName>
    {children}
  </Container>
)
