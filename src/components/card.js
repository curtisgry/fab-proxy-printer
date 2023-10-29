import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card, addToList, removeFromList, generateCardImage }) => {
  if (!card.printings[0].image_url) return;

  return (
    <div className="column is-half-mobile is-one-third-tablet is-one-quarter-widescreen single-card">
      <img
        className="image is-fullwidth print"
        src={generateCardImage(card)}
        alt="card"
      />

      {addToList ? (
        <button
          type="button"
          className="button is-primary mt-2 do-not-print"
          onClick={() => addToList(card)}
        >
          Add Card
        </button>
      ) : (
        ''
      )}
      {removeFromList ? (
        <button
          type="button"
          className="button is-danger mt-2 do-not-print"
          onClick={() => removeFromList(card)}
        >
          Remove Card
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  addToList: PropTypes.func,
  removeFromList: PropTypes.func,
  generateCardImage: PropTypes.func,
};

export default Card;
