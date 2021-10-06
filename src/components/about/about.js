import React from 'react';
import { Container, ContainerInner, Header } from './style';

const About = () => (
  <div>
    <Container>
      <ContainerInner>
        <Header>About Cocktail Search</Header>
        <p style={{ color: '#fff', fontSize: '28px', fontFamily: 'Bitter, serif' }}>
          This is a test.
        </p>
      </ContainerInner>
    </Container>
  </div>
);

export default About;
