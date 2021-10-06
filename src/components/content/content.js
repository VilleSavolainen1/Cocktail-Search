import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {
  Container, InnerContainer,
} from './style';

const Content = ({ items }) => {
  console.log(items);
  let renderItems;
  if (items !== null) {
    renderItems = items.map((i) => (
      <ul key={i.idDrink} className="list">
        <div key={i.idDrink} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="cocktail-name">
                <h1 className="header">{i.strDrink}</h1>
              </div>
              <img
                className="cocktail-image"
                src={i.strDrinkThumb}
                alt=""
              />
            </div>
            <div className="flip-card-back">
              <h1>{i.strDrink}</h1>
              <p style={{ padding: '8px' }}>{i.strInstructions}</p>
            </div>
          </div>
        </div>
      </ul>
    ));
  } else {
    renderItems = <h1 style={{ fontSize: '48px' }}>Sorry, no results...</h1>;
  }

  return (
    <div style={{ width: '100%' }}>
      <Container>
        <InnerContainer>
          {renderItems}
        </InnerContainer>
      </Container>
    </div>
  );
};

Content.propTypes = {
  items: PropTypes.func.isRequired,
};

export default Content;
