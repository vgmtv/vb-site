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
  max-width: 650px;;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(50, 171, 223);
  text-align: center;
  padding: 16px;
`;

export default ({data}) => {
  return (
    <Container>
      <Head />
      <Header />
      <Wrapper>
        <Intro>
          VietBible là chương trình giúp việc học và nghiên cứu Kinh Thánh bằng
          tiếng Việt cho mọi người không phân biệt tôn giáo, giáo phái.
        </Intro>
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
  }
`;
