import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

class CardList extends Component {
  render() {
    const { cards, deleteCard } = this.props;

    return (
      cards.length > 0
        ? cards.map((card) => <Card
            card={card}
            key={card.id}
            deleteCard={deleteCard}
          />)
        : 'There are no cards to show.'
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
};

export default CardList;
