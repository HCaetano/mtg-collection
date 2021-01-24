import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import '../css/CardList.css';

class CardList extends Component {
  render() {
    const { cards, deleteCard } = this.props;

    return (
      <section className="card-list">
        {
          cards.length > 0
            ? cards.map((card) => <Card
                card={card}
                key={card.id}
                deleteCard={deleteCard}
              />)
            : 'There are no cards to show.'
            
          }
      </section>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
};

export default CardList;
