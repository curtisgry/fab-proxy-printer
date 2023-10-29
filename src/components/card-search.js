import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cards from '../data/card.json';
import Card from './card';

const Cards = ({ addToList, generateCardImage }) => {
  const [cardsList, setCardsList] = useState(null);
  const [search, setSearch] = useState('');

  const onSearchInput = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updateIDs = cards
      .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()))
      .map((card) => card)
      .flat();

    setCardsList(updateIDs);
  };

  console.log(cardsList);

  return (
    <div>
      <form className="mb-4 columns do-not-print" onSubmit={onSubmit}>
        <div className="field is-grouped column is-7 mt-5">
          <div className="control is-expanded">
            <input
              id="search"
              className="input is-primary"
              value={search}
              onChange={onSearchInput}
              placeholder="Search for cards by name"
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="columns is-mobile is-multiline is-3">
        {cardsList
          ? cardsList.map((card, i) => (
              <Card
                key={`${card.cardIdentifier}-${i}`}
                card={card}
                addToList={addToList}
                generateCardImage={generateCardImage}
              />
            ))
          : ''}
      </div>
    </div>
  );
};

Cards.propTypes = {
  addToList: PropTypes.func,
  generateCardImage: PropTypes.func,
};

export default Cards;
