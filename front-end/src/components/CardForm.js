import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css';
class CardForm extends Component {
  render() {
    const { card, onChange } = this.props;
    const showDetails = window.location.pathname !== '/' ? true : false;

    return (
      showDetails
        ? (
          <Fragment>
            <div>
              <img src={card.image} alt="" />
            </div>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" value={card.name || ''} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="manaCost">Mana cost: </label>
              <input type="text" name="manaCost" value={card.manaCost || ''} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="cmc">CMC: </label>
              <input type="text" name="cmc" value={card.cmc || ''} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="typeLine">Type line: </label>
              <input type="text" name="typeLine" value={card.typeLine || ''} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="oracleText">Oracle text: </label>
              <input type="text" name="oracleText" value={card.oracleText || ''} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="colors">Colors: </label>
              <input type="text" name="colors" value={card.colors || ''} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="magicSetName">Magic set: </label>
              <input type="text" name="magicSetName" value={card.magicSetName || ''} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="rarity">Rarity: </label>
              <input type="text" name="rarity" value={card.rarity || ''} onChange={onChange} />
            </div>
          </Fragment>
        )
      : (
          <article className="card-element">
            <img src={card.image} />
          </article>
        )
    );
  }
}

CardForm.propTypes = {
  card: PropTypes.shape(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardForm;
