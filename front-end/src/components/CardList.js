import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../css/CardList.css';

const CardList = ({ cards, deleteCard }) => (
  <section className="card-list">
    {
      cards.length > 0
        ? cards.map((card) => (
          <Card
            card={ card }
            key={ card.id }
            deleteCard={ deleteCard }
          />))
        : 'There are no cards to show.'
    }
  </section>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
