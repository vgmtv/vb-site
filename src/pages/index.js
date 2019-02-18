import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Platform from '../components/platform';
import Button from '../components/button';
import '../css/global.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 700px;
`;

const DownloadSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default ({data}) => {
  const download = url => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  return (
    <Container>
      <Head />
      <Header />
      <Wrapper>
        {data.platforms.edges.map(({node: {name, type, version, urls}}) => (
          <Platform name={name} key={name}>
            <DownloadSection>
              {urls.map(({url, description}) => (
                <Button
                  key={description}
                  title={description}
                  onPress={() => download(url)}
                />
              ))}
            </DownloadSection>
          </Platform>
        ))}
      </Wrapper>
      <div style={{flex: 1, backgroundColor: '#fff'}} />
      <Footer />
    </Container>
  );
};

export const query = graphql`
  query platforms {
    platforms: allPlatformsYaml(sort: {order: ASC, fields: order}) {
      edges {
        node {
          name
          type
          version
          urls {
            url
            description
          }
        }
      }
    }
  }
`;
