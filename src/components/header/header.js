import React from 'react';
import {
  Navigation, NavigationInner, Title, Input,
  SearchSection,
} from './style';
import search from '../../images/search.png';

const Header = () => (
  <div>
    <Navigation>
      <NavigationInner>
        <Title>Cocktail Search</Title>
        <SearchSection>
          <Input placeholder="Search for cocktails..." onChange={(e) => console.log(e.target.value)} />
          <img src={search} alt="" style={{ marginLeft: '-24px' }} />
        </SearchSection>
      </NavigationInner>
    </Navigation>
  </div>
);

export default Header;
