import React, { Component, Fragment } from 'react';

class Card extends Component {
  render() {
    const { card, onChange } = this.props;

    return (
      <Fragment>
        <img src={card.image} alt=""></img>
        <label>Name:</label>
        <input type="text" name="name" value={card.name || ''} onChange={onChange} />
        <label>Mana cost:</label>
        <input type="text" name="manaCost" value={card.manaCost || ''} onChange={onChange} />
        <label>CMC:</label>
        <input type="text" name="cmc" value={card.cmc || ''} onChange={onChange} />
        <label>Type line:</label>
        <input type="text" name="typeLine" value={card.typeLine || ''} onChange={onChange} />
        <label>Oracle text:</label>
        <input type="text" name="oracleText" value={card.oracleText || ''} onChange={onChange} />
        <label>Colors:</label>
        <input type="text" name="colors" value={card.colors || ''} onChange={onChange} />
        <label>Magic set:</label>
        <input type="text" name="magicSetName" value={card.magicSetName || ''} onChange={onChange} />
        <label>Rarity:</label>
        <input type="text" name="rarity" value={card.rarity || ''} onChange={onChange} />
      </Fragment>
    );
  }
}

export default Card;