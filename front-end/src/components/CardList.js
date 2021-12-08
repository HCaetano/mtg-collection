import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../css/CardList.css';

const CardList = ({ cards }) => (
  <article className="card-list">
    {
      cards.length > 0
        ? cards.map((card) => (
          <Card
            content={ card }
            key={ card.id }
          />))
        : 'There are no cards to show.'
    }
  </article>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
};

export default CardList;
