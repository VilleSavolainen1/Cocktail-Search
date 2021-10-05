import React from 'react';
import { Container, InnerContainer, Card } from './style';

// eslint-disable-next-line react/prop-types
const Content = ({ items }) => {
  // eslint-disable-next-line react/prop-types
  console.log(items);
  // eslint-disable-next-line react/prop-types
  let renderItems;
  if (items) {
    // eslint-disable-next-line react/prop-types
    renderItems = items.map((i) => (
      <ul key={i.idDrink}>
        <Card>
          <img src={i.strDrinkThumb} style={{ height: '250px' }} alt="" />
          <p>{i.strDrink}</p>
        </Card>
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

export default Content;
