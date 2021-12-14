import React from 'react';
import { useNavigate } from 'react-router';
import styles from './styles.module.css';

const Card = ({ content }) => {
  const {
    id,
    image,
    name,
  } = content
  const isDetailsPage = window.location.pathname.includes("card/")
  const navigate = useNavigate();

  return (
    isDetailsPage
    ?
      <article className={styles["card-element no-shadow"]}>
        <img src={ image } alt={ `${name} art` } />
      </article>
    :
      <article className={styles["card-element"]} onClick={() => navigate(`/card/${id}`)}>
        <img className={styles["card-art"]} src={ image } alt={ `${name} art` } />
      </article>
  )
};

export default Card;
