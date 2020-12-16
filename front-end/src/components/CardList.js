import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

class CardList extends Component {
  render() {
    const { cards } = this.props;

    return (
      cards.length > 0
        ? cards.map((card) => <Card card={card} />)
        : 'There are no cards to show.'
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shapeOf(PropTypes.string)).isRequired,
};

export default CardList;
