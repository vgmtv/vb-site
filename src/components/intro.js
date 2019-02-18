import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useSpring, useTransition, animated} from 'react-spring';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  min-height: 90px;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(50, 171, 223);
  text-align: center;
  padding: 16px;
`;

export default ({data}) => {
  const [index, setIndex] = useState(0);
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1 < data.length ? index + 1 : 0);
    }, 5000);
  });

  return (
    <Container>
      <animated.div style={props}>
        <Intro>{data[index].content}</Intro>
      </animated.div>
    </Container>
  );
};
