import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css';
class Card extends Component {
  render() {
    const { card, deleteCard } = this.props;
    const showDetails = window.location.pathname !== '/' ? true : false;

    return (
      <article className="card-element">
        {
          showDetails
            ? (
                <Fragment>
                  <p>{card.name}</p>
                  <p>{card.manaCost}</p>
                  <p>{card.typeLine}</p>
                  <p>{card.oracleText}</p>
                  <p>{card.colors}</p>
                  <p>{card.magicSetName}</p>
                  <p>{card.rarity}</p>
                  <img src={card.image} />
                  <button onClick={deleteCard} value={card.id}>Delete</button>
                </Fragment>
              )
            : <img src={card.image} />
        }
      </article>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape(PropTypes.string).isRequired,
};

export default Card;
