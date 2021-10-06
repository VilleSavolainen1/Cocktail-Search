import React from 'react';
import { Container, ContainerInner, Header } from './style';

const About = () => (
  <div>
    <Container>
      <ContainerInner>
        <Header>About Cocktail Search</Header>
        <p style={{ color: '#fff', fontSize: '18px', fontFamily: 'Bitter, serif' }}>
          An open, crowd-sourced database of drinks and cocktails from around the world.
          We also offer a free JSON API for anyone wanting to use it.
          If you like the site, please consider supporting us on
          Patreon by clicking the link below...
        </p>
      </ContainerInner>
    </Container>
  </div>
);

export default About;
