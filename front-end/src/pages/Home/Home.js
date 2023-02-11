import { useEffect, useState } from 'react';
import classNames from 'classnames';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useSnackbar } from 'react-simple-snackbar';
import { Watch } from 'react-loader-spinner';
import * as backEndApi from '../../api/BackEndApi';
import * as scryFallApi from '../../api/ScryFallApi';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './styles.module.css';

const Home = () => {
  const [cardList, setCardList] = useState([]);
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [newCardStatus, setNewCardStatus] = useState(true);
  const options = {
    position: 'bottom-left',
    style: {
      backgroundColor: '#371e30',
      color: 'white',
    },
    closeStyle: {
      color: 'white',
    },
  };
  const [openSnackbar] = useSnackbar(options);
  const [nameToBeSearched, setNameToBeSearched] = useState('');

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
      openSnackbar('Card saved to database');
      setCard({});
      setNewCardStatus(false);
    });
  };

  const findRandomCard = () => {
    setIsLoading(true);
    setNewCardStatus(true);
    scryFallApi.findRandomCard().then(({ data }) => {
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
      setNewCardStatus(false);
    });
  };

  const findCardByName = () => {
    scryFallApi
      .findCardByName(nameToBeSearched)
      .then(({ data: returnedCards }) => {
        const rawCardData = returnedCards.data[0];
        const newCard = {
          name: rawCardData.name,
          manaCost: rawCardData.mana_cost,
          cmc: rawCardData.cmc,
          typeLine: rawCardData.type_line,
          oracleText: rawCardData.oracle_text,
          colors: rawCardData.colors.toString(),
          magicSetName: rawCardData.set_name,
          rarity: rawCardData.rarity,
          image: rawCardData.image_uris.normal,
        };
        setCard(newCard);
        setNewCardStatus(false);
      })
      .catch(() => {
        openSnackbar("Couldn't find a card with this name");
        setCard({});
      });
  };

  const handleCardNameInput = ({ target }) => {
    setNameToBeSearched(target.value);
  };

  return (
    <section className={styles['page-container']}>
      <Header />
      <main className={styles['main-content']}>
        <section className={styles['card-gallery']}>
          <h1 className={styles.title}>Card gallery</h1>
          <CardList cards={cardList} />
        </section>
        <section className={styles['new-card-container']}>
          <div className={styles['search-card-area']}>
            <input
              className={styles['card-name-input']}
              type="text"
              placeholder="Search a card by its name"
              value={nameToBeSearched}
              onChange={handleCardNameInput}
            />
            <button
              className={classNames(
                !nameToBeSearched
                  ? [styles.button, styles['button-disabled']]
                  : [styles.button]
              )}
              onClick={findCardByName}
              disabled={!nameToBeSearched}
            >
              Search card
            </button>
          </div>
          <div className={styles['random-card-area']}>
            <h2>Fetch a random card from ScryFall</h2>
            <button
              className={classNames(
                styles.button,
                styles['show-random-card-button']
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
                'Show card'
              )}
            </button>
          </div>
          <Card content={card} isRandomCard={true} />
          <div className={styles['button-position']}>
            <button
              className={classNames(
                newCardStatus || !card.name
                  ? [
                      styles.button,
                      styles['submit-button'],
                      styles['button-disabled'],
                    ]
                  : [styles.button, styles['submit-button']]
              )}
              onClick={insertNewCard}
              disabled={newCardStatus && !card.name}
            >
              {isLoading ? (
                <Watch
                  ariaLabel="loading"
                  color="white"
                  height="20"
                  width="20"
                />
              ) : (
                'Save'
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
