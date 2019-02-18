import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Platform from '../components/platform';
import Button from '../components/button';
import Intro from '../components/intro';
import '../css/global.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;
`;

export default ({data}) => {
  return (
    <Container>
      <Head />
      <Header />
      <Wrapper>
        <Intro data={data.intros.edges[0].node.intros} />
        {data.platforms.edges.map(({node: {name, type, version, urls}}) => (
          <Platform name={name} version={version} key={name}>
            {urls.map(({url, description}) => (
              <Button key={description} title={description} link={url} />
            ))}
          </Platform>
        ))}
      </Wrapper>
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
    intros: allDataYaml {
      edges {
        node {
          intros {
            id
            content
          }
        }
      }
    }
  }
`;
