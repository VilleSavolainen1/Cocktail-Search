import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './searchForm';
import {
  Navigation, NavigationInner, Title,
  LinkSection, NavLink,
} from './style';

const linkStyle = {
  textDecoration: 'none',
};

const Header = () => (
  <div>
    <Navigation>
      <NavigationInner>
        <Link style={linkStyle} to="/"><Title>Cocktail Search</Title></Link>
        <SearchForm />
        <LinkSection>
          <Link style={linkStyle} to="/about"><NavLink>About</NavLink></Link>
        </LinkSection>
      </NavigationInner>
    </Navigation>
  </div>
);

export default Header;
