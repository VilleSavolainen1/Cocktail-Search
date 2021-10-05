import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {
  Container, InnerContainer,
} from './style';

const Content = ({ items }) => {
  console.log(items);

  let renderItems;
  if (items) {
    renderItems = items.map((i) => (
      <ul key={i.idDrink} className="list">
        <div key={i.idDrink} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={i.strDrinkThumb}
                style={{
                  height: '220px', width: '230px', padding: '5px',
                }}
                alt=""
              />
              <h4>{i.strDrink}</h4>
            </div>
            <div className="flip-card-back">
              <h2>{i.strDrink}</h2>
              <p style={{ padding: '8px' }}>{i.strInstructions}</p>
            </div>
          </div>
        </div>
      </ul>
    ));
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
