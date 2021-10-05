import React, { useState } from 'react';
import { SearchSection, Input } from './style';
import search from '../../images/search.png';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <form onSubmit={() => alert('submitted')}>
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

export default SearchForm;
