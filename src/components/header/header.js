import React from 'react';
import {
  Navigation, NavigationInner, Title, Input,
} from './style';

const Header = () => (
  <div>
    <Navigation>
      <NavigationInner>
        <Title>Cocktail Search</Title>
        <Input placeholder="Search" />
      </NavigationInner>
    </Navigation>
  </div>
);

export default Header;
