import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { card } = this.props;

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
        <button onClick={this.deleteCard} value={card.id}>Delete</button>
      </article>
    );
  }
}

export default Card;