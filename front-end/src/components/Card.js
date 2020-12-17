import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Card extends Component {
  render() {
    const { card, deleteCard } = this.props;

    return (
      <article>
        <p>{ card.name }</p>
        <p>{ card.manaCost }</p>
        <p>{ card.cmc }</p>
        <p>{ card.typepne }</p>
        <p>{ card.oracleText }</p>
        <p>{ card.colors }</p>
        <p>{ card.magicSetName }</p>
        <p>{ card.rarity }</p>
        <button onClick={deleteCard} value={card.id}>Delete</button>
      </article>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape(PropTypes.string).isRequired,
};

export default Card;
