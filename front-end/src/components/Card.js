import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css';
class Card extends Component {
  render() {
    const { card, deleteCard } = this.props;

    return (
      <article className="card-element">
        <p>{ card.name }</p>
        <p>{ card.manaCost }</p>
        <p>{ card.cmc }</p>
        <p>{ card.typepne }</p>
        <p>{ card.oracleText }</p>
        <p>{ card.colors }</p>
        <p>{ card.magicSetName }</p>
        <p>{ card.rarity }</p>
        <img src={ card.image } />
        <button onClick={deleteCard} value={card.id}>Delete</button>
      </article>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape(PropTypes.string).isRequired,
};

export default Card;
