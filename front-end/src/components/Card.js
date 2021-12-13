import React from 'react';
import { useNavigate } from 'react-router';
import * as backEndApi from '../api/BackEndApi';
import '../css/Card.css';

const Card = ({ content }) => {
  const {
    colors,
    id,
    image,
    name,
    magicSetName,
    manaCost,
    // oracleText,
    rarity,
    typeLine,
  } = content
  const isDetailsPage = window.location.pathname.includes("card/")
  const navigate = useNavigate();

  const capitalizeFirstCharacter = (string) => {
    if (typeof string !== 'string') return ''

    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const deleteCard = ({ target }) => {
    backEndApi.deleteCard(target.value)
      .then(() => navigate("/"));
  }

  const displayFullColorName = (colorCode) => {
    switch (colorCode) {
      case "W":
        return "White";
      case "U":
        return "Blue";
      case "B":
        return "Black";
      case "R":
        return "Red";
      case "G":
        return "Green";
      default:
        return colorCode;
    }
  }

  // const oracleTextParser = (oracleText) => {
  //   const newString = oracleText?.split(" ");
  //   const um = newString?.slice(0, 4) + "\n" + newString?.slice(5)
  //   return um.toString()
  // }

  return (
    isDetailsPage
    ?
      <article className="card-element no-shadow">
        <img src={ image } alt={ `${name} art` } />
        <section className="card-info-container">
          <p className="card-info"><span className="text-line">{name}</span></p>
          <p className="card-info"><span className="text-line">{manaCost}</span></p>
          <p className="card-info"><span className="text-line">{typeLine}</span></p>
          {/* <p className="card-info"><span className="text-line">{oracleTextParser(oracleText)}</span></p> */}
          <p className="card-info"><span className="text-line">{displayFullColorName(colors)}</span></p>
          <p className="card-info"><span className="text-line">{magicSetName}</span></p>
          <p className="card-info"><span className="text-line">{capitalizeFirstCharacter(rarity)}</span></p>
          <button
            className="delete-button"
            type="button"
            onClick={ deleteCard }
            value={ id }
          >
            Delete
          </button>
        </section>
      </article>
    :
      <article className="card-element" onClick={() => navigate(`/card/${id}`)}>
        <img className="card-art" src={ image } alt={ `${name} art` } />
      </article>
  )
};

export default Card;
