import React, { useState, useEffect } from 'react';
import * as backEndApi from '../../api/BackEndApi';
import scryFallApi from '../../api/ScryFallApi';
import CardForm from '../../components/CardForm/CardForm';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './styles.module.css';

const Home = () => {
  const [cardList, setCardList] = useState([]);
  const [card, setCard] = useState({});

  const getAllCards = async () => {
    const response = await backEndApi.getAllCards();

    setCardList(response.data);
  };

  useEffect(() => {
    getAllCards();
  }, []);

  const onChange = () => {};
  // const onChange = ({ target }) => {
  //   const { name, value } = target;
  //   console.log(name, value)
  //   setUpdatedCard({
  //     ...updatedCard,
  //     [name]: value,
  //   })
  // }

  // editCard(event) {
  //   event.preventDefault();
  //   backEndApi.editCard(this.state.cardId, this.state.card)
  //     .then(() => this.setState({ card: {} }))
  //     .then(() => this.getAllCards());
  // }

  const insertNewCard = () => {
    backEndApi.insertNewCard(card)
      .then(() => getAllCards());
  };

  const findRandomCard = () => {
    scryFallApi()
      .then((response) => {
        const randomCard = {
          name: response.data.name,
          manaCost: response.data.mana_cost,
          cmc: response.data.cmc,
          typeLine: response.data.type_line,
          oracleText: response.data.oracle_text,
          colors: response.data.colors.toString(),
          magicSetName: response.data.set_name,
          rarity: response.data.rarity,
          image: response.data.image_uris.normal,
        };

        setCard({ ...randomCard });
      });
  };

  return (
    <section className={styles["page-container"]}>
      <Header />
      <main className={styles["main-content"]}>
        <section className={styles["card-gallery"]}>
          <h1 className={styles.title}>Card gallery</h1>
          <CardList
            cards={ cardList }
          />
        </section>

        <section className={styles["card-actions"]}>
          <div className={styles["card-actions-top"]}>
            <h2>Show a random card from ScryFall</h2>
            <input
              type="submit"
              name="show-random-card"
              value="Show card"
              onClick={ findRandomCard }
            />
          </div>
          <form>
            <CardForm card={ card } onChange={ onChange } />
            <div className="button-position">
              <input
                name="save-card"
                type="button"
                value="Save"
                onClick={ insertNewCard }
              />
            </div>
          </form>
        </section>

        {/* <section className="card-actions">
            <div className="card-actions-top">
              <h2>Edit a card from the database</h2>
              <form>
                <input
                  type="text"
                  placeholder="Type the card's id"
                  name="search"
                  onBlur={this.updateCardId}
                />
                <input
                  name="find-card"
                  type="submit"
                  value="Find card"
                  onClick={this.findCardById}
                />
              </form>
            </div>

            <form onSubmit={this.editCard}>
              <CardForm card={card} onChange={this.onChange} />
              <div className="button-position">
                <input
                  name="edit-card"
                  type="submit"
                  value="Save modifications"
                />
              </div>
            </form>
          </section> */}
      </main>
      <Footer />
    </section>
  );
  // }
};

export default Home;
