import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SearchSection, Input } from './style';
import search from '../../images/search.png';

const SearchForm = ({ setItems, searchOption }) => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue) return;
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${searchOption}=${searchValue}`);
    setSearchValue('');
    setItems(res.data.drinks);
    history.push('/');
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
  searchOption: PropTypes.string.isRequired,
};

export default SearchForm;
