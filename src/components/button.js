import React from 'react';
import styled from 'styled-components';
import {OutboundLink} from 'gatsby-plugin-google-analytics';

const Container = styled.div`
  @media (max-width: 480px) {
    align-self: center;
    margin: 15px 15px;
  }
  &:hover a {
    background-color: #222;
    color: #fff;
    cursor: pointer;
  }
`;

export default ({title, link}) => (
  <Container>
    <OutboundLink
      style={{
        margin: '5px',
        padding: '10px',
        color: '#000',
        backgroundColor: '#ccc',
        borderRadius: '20px',
        textDecoration: 'none',
      }}
      target="new"
      href={link}>
      {title}
    </OutboundLink>
  </Container>
);
