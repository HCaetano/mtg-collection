import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Watch } from "react-loader-spinner";
import * as backEndApi from "../../api/BackEndApi";
import scryFallApi from "../../api/ScryFallApi";
import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.css";

const Home = () => {
  const [cardList, setCardList] = useState([]);
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getAllCards = async () => {
    const response = await backEndApi.getAllCards();

    setCardList(response.data);
  };
  useEffect(() => {
    getAllCards();
  }, []);

  const insertNewCard = () => {
    setIsLoading(true);
    backEndApi.insertNewCard(card).then(() => {
      getAllCards();
      setIsLoading(false);
    });
  };

  const findRandomCard = () => {
    setIsLoading(true);
    scryFallApi().then(({ data }) => {
      const randomCard = {
        name: data.name,
        manaCost: data.mana_cost,
        cmc: data.cmc,
        typeLine: data.type_line,
        oracleText: data.oracle_text,
        colors: data.colors.toString(),
        magicSetName: data.set_name,
        rarity: data.rarity,
        image: data.image_uris.normal,
      };

      setCard({ ...randomCard });
      setIsLoading(false);
    });
  };

  return (
    <section className={styles["page-container"]}>
      <Header />
      <main className={styles["main-content"]}>
        <section className={styles["card-gallery"]}>
          <h1 className={styles.title}>Card gallery</h1>
          <CardList cards={cardList} />
        </section>
        <section className={styles["random-card-container"]}>
          <div className={styles["random-card-top"]}>
            <h2>Fetch a random card from ScryFall</h2>
            <button
              className={classNames(
                styles.button,
                styles["show-random-card-button"]
              )}
              onClick={findRandomCard}
            >
              {isLoading ? (
                <Watch
                  ariaLabel="loading"
                  color="white"
                  height="20"
                  width="20"
                />
              ) : (
                "Show card"
              )}
            </button>
          </div>
          <Card content={card} />
          <div className={styles["button-position"]}>
            <button
              className={classNames(styles.button, styles["save-button"])}
              onClick={insertNewCard}
            >
              {isLoading ? (
                <Watch
                  ariaLabel="loading"
                  color="white"
                  height="20"
                  width="20"
                />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
