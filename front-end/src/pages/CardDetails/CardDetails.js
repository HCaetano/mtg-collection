import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import * as backEndApi from "../../api/BackEndApi";
import { useNavigate } from "react-router";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.css";

const CardDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const options = {
    position: "bottom-left",
    style: {
      backgroundColor: "#371e30",
      color: "white",
    },
    closeStyle: {
      color: "white",
    },
  };
  const [openSnackbar] = useSnackbar(options);

  const findCardById = useCallback(() => {
    backEndApi.findCardById(id).then((response) => setCard(response.data));
  }, [id]);

  useEffect(() => {
    findCardById();
  }, [findCardById]);

  const capitalizeFirstCharacter = (string) => {
    if (typeof string !== "string") return "";

    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const deleteCard = () => {
    backEndApi.deleteCard(id).then(() => {
      openSnackbar("Card deleted");
      navigate("/");
    });
  };

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
  };

  if (!card) return "Card not found";

  return (
    <section className={styles["page-container"]}>
      <Header />
      <div className={styles["card-container"]}>
        <Card content={card} />
        <section className={styles["card-info-container"]}>
          <p className={styles["card-info"]}>
            <span className={styles["text-line"]}>{card.name}</span>
          </p>
          <p className={styles["card-info"]}>
            <span className={styles["text-line"]}>{card.manaCost}</span>
          </p>
          <p className={styles["card-info"]}>
            <span className={styles["text-line"]}>{card.typeLine}</span>
          </p>
          {/* <p className={styles["card-info"]}><span className={styles["text-line"]}>{oracleTextParser(card.oracleText)}</span></p> */}
          <p className={styles["card-info"]}>
            <span className={styles["text-line"]}>
              {displayFullColorName(card.colors)}
            </span>
          </p>
          <p className={styles["card-info"]}>
            <span className={styles["text-line"]}>{card.magicSetName}</span>
          </p>
          <p>
            <span className={styles["text-line"]}>
              {capitalizeFirstCharacter(card.rarity)}
            </span>
          </p>
          <button
            className={styles["delete-button"]}
            type="button"
            onClick={deleteCard}
          >
            Delete
          </button>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default CardDetails;
