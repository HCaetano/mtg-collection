import React from 'react';
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

export default CardList;
