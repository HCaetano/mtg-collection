import React from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css';

const Card = ({ card, deleteCard }) => {
  const showDetails = window.location.pathname !== '/';

  return (
    <article className="card-element">
      {
        showDetails
          ? (
            <article>
              <p>{card.name}</p>
              <p>{card.manaCost}</p>
              <p>{card.typeLine}</p>
              <p>{card.oracleText}</p>
              <p>{card.colors}</p>
              <p>{card.magicSetName}</p>
              <p>{card.rarity}</p>
              <img src={ card.image } alt={ `${card.name} art` } />
              <button
                type="button"
                onClick={ deleteCard }
                value={ card.id }
              >
                Delete
              </button>
            </article>
          )
          : <img src={ card.image } alt={ `${card.name} art` } />
      }
    </article>
  );
};

Card.propTypes = {
  card: PropTypes.shape(PropTypes.string).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
