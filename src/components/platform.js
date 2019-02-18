import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 8px;
  margin: 8px;
`;

const PlatformName = styled.span`
  color: grey;
  padding: 2px;
  margin: 8px;
`;

const DownloadSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export default ({children, name, version}) => (
  <Container>
    <PlatformName>
      {name} v{version}
    </PlatformName>
    <DownloadSection>{children}</DownloadSection>
  </Container>
);
