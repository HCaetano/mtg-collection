import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import cardBack from "../../assets/card-back.jpeg";

const Card = ({ content, isRandomCard }) => {
  const { id, image, name } = content;
  const isDetailsPage = window.location.pathname.includes("card/");
  const navigate = useNavigate();

  return isDetailsPage || isRandomCard ? (
    <article
      className={classNames(styles["card-element"], styles["no-shadow"])}
    >
      <img
        className={styles["card-art"]}
        src={image ? image : cardBack}
        alt={`${name} art`}
      />
    </article>
  ) : (
    <article
      className={styles["card-element"]}
      onClick={() => navigate(`/card/${id}`)}
    >
      <img
        className={styles["card-art"]}
        src={image ? image : cardBack}
        alt={`${name} art`}
      />
    </article>
  );
};

export default Card;
