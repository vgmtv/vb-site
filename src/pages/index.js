import React from 'react';
import styled from 'styled-components';
import Head from '../components/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Platform from '../components/Platform';
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

export default () => {
  const download = () => {
    window.open('https://vgm.tv')
  }
  return (
    <Container>
      <Head />
      <Header />
      <Wrapper>
        <Platform name="Windows">
          <DownloadSection>
            <Button title="Tải Về (32-bit)" onPress={download} />
            <Button title="Tải Về (64-bit)" />
          </DownloadSection>
        </Platform>
        <Platform name="MacOS">
          <DownloadSection>
            <Button title="Tải Về (App Store)" onPress={download} />
          </DownloadSection>
        </Platform>
        <Platform name="Android">
          <DownloadSection>
            <Button title="Tải Về (Google Play)" onPress={download} />
          </DownloadSection>
        </Platform>
      </Wrapper>
      <div style={{flex: 1, backgroundColor: '#fff'}} />
      <Footer />
    </Container>
  );
};
