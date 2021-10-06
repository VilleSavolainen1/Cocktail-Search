import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchForm from './searchForm';
import {
  Navigation, NavigationInner, Title,
  LinkSection, NavLink, SearchSection,
} from './style';

const linkStyle = {
  textDecoration: 'none',
};

const Header = ({ setItems }) => {
  const [searchOption, setSearchOption] = useState('s');

  const handleChange = (e) => {
    const { value } = e.target;
    if (value === 's') {
      setSearchOption(`search.php?${value}`);
    } else {
      setSearchOption(`filter.php?${value}`);
    }
  };
  return (
    <div>
      <Navigation>
        <NavigationInner>
          <Link style={linkStyle} to="/"><Title>Cocktail Search</Title></Link>
          <SearchSection>
            <SearchForm setItems={setItems} searchOption={searchOption} />
            <form style={{ color: 'white' }}>
              <label htmlFor="name" style={{ margin: '5px' }}>
                <input
                  style={{ margin: '5px' }}
                  type="radio"
                  value="s"
                  id="name"
                  name="search"
                  onChange={(e) => handleChange(e)}
                />
                Search by name
              </label>
              <label htmlFor="ingredient" style={{ margin: '5px' }}>
                <input
                  style={{ margin: '5px' }}
                  type="radio"
                  value="i"
                  id="ingredient"
                  name="search"
                  onChange={(e) => handleChange(e)}
                />
                Search by ingredient
              </label>
            </form>
          </SearchSection>
          <LinkSection>
            <Link style={linkStyle} to="/about"><NavLink>About</NavLink></Link>
          </LinkSection>
        </NavigationInner>
      </Navigation>
    </div>
  );
};
Header.propTypes = {
  setItems: PropTypes.func.isRequired,
};

export default Header;
