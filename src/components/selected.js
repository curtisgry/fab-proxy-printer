import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const Selected = ({ cardList, removeFromList, generateCardImage }) => (
  <div className="columns is-mobile is-multiline mt-4 cards">
    {cardList && cardList.length ? (
      cardList.map((card) => (
        <Card
          key={card.id}
          card={card}
          removeFromList={removeFromList}
          generateCardImage={generateCardImage}
        />
      ))
    ) : (
      <div className="box">
        <h4>Cards you add will appear here</h4>
        <p>Click the Add Cards button to start</p>
      </div>
    )}
  </div>
);

Selected.propTypes = {
  cardList: PropTypes.array,
  removeFromList: PropTypes.func,
  generateCardImage: PropTypes.func,
};

export default Selected;
