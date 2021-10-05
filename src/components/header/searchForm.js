import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SearchSection, Input } from './style';
import search from '../../images/search.png';

const SearchForm = ({ setItems }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`);
    setItems(res.data.drinks);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <SearchSection>
          <Input placeholder="Search for cocktails..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button
            type="submit"
            style={{
              marginLeft: '-30px', background: 'transparent', border: 'none',
            }}
          >
            <img src={search} alt="" style={{ cursor: 'pointer', postion: 'relative' }} aria-hidden="true" />
          </button>
        </SearchSection>
      </form>
    </div>
  );
};
SearchForm.propTypes = {
  setItems: PropTypes.func.isRequired,
};

export default SearchForm;
