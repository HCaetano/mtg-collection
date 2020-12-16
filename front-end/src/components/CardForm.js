import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CardForm extends Component {
  render() {
    const { card, onChange } = this.props;

    return (
      <Fragment>
        <img src={card.image} alt="" />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={card.name || ''} onChange={onChange} />
        <label htmlFor="manaCost">Mana cost:</label>
        <input type="text" name="manaCost" value={card.manaCost || ''} onChange={onChange} />
        <label htmlFor="cmc">CMC:</label>
        <input type="text" name="cmc" value={card.cmc || ''} onChange={onChange} />
        <label htmlFor="typeLine">Type line:</label>
        <input type="text" name="typeLine" value={card.typeLine || ''} onChange={onChange} />
        <label htmlFor="oracleText">Oracle text:</label>
        <input type="text" name="oracleText" value={card.oracleText || ''} onChange={onChange} />
        <label htmlFor="colors">Colors:</label>
        <input type="text" name="colors" value={card.colors || ''} onChange={onChange} />
        <label htmlFor="magicSetName">Magic set:</label>
        <input type="text" name="magicSetName" value={card.magicSetName || ''} onChange={onChange} />
        <label htmlFor="rarity">Rarity:</label>
        <input type="text" name="rarity" value={card.rarity || ''} onChange={onChange} />
      </Fragment>
    );
  }
}

CardForm.propTypes = {
  card: PropTypes.shapeOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardForm;
