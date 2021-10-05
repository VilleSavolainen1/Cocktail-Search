import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchForm from './searchForm';
import {
  Navigation, NavigationInner, Title,
  LinkSection, NavLink,
} from './style';

const linkStyle = {
  textDecoration: 'none',
};

const Header = ({ setItems }) => (
  <div>
    <Navigation>
      <NavigationInner>
        <Link style={linkStyle} to="/"><Title>Cocktail Search</Title></Link>
        <SearchForm setItems={setItems} />
        <LinkSection>
          <Link style={linkStyle} to="/about"><NavLink>About</NavLink></Link>
        </LinkSection>
      </NavigationInner>
    </Navigation>
  </div>
);
Header.propTypes = {
  setItems: PropTypes.func.isRequired,
};

export default Header;
