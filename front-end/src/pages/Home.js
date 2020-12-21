import React, { Component } from 'react';
import * as backEndApi from '../api/BackEndApi';
import scryFallApi from '../api/ScryFallApi';
import CardForm from '../components/CardForm';
import CardList from '../components/CardList';
import '../css/Reset.css';
import '../css/CardForm.css';
import '../css/General.css';
import '../css/Home.css';
export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      cardList: [],
      randomCard: {
        image: 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest/scale-to-width-down/250?cb=20140813141013'
      },
      card: {},
    };

    this.insertNewCard = this.insertNewCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.findCardById = this.findCardById.bind(this);
    this.editCard = this.editCard.bind(this);
    this.findRandomCard = this.findRandomCard.bind(this);
    this.updateCardId = this.updateCardId.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeRandomCard = this.onChangeRandomCard.bind(this);
  }

  componentDidMount() {
    this.asyncRequest = this.getAllCards();
  }

  onChangeRandomCard(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      randomCard: {
        ...prevState.card,
        [name]: value,
      },
    }));
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      card: {
        ...prevState.card,
        [name]: value,
      },
    }));
  }

  async getAllCards() {
    const response = await backEndApi.getAllCards();

    this.setState({ cardList: response.data });
  }

  findCardById(event) {
    event.preventDefault();
    event.persist();

    backEndApi.findCardById(this.state.cardId)
      .then((response) => this.setState({ card: response.data }));
  }

  editCard(event) {
    event.preventDefault();

    backEndApi.editCard(this.state.cardId, this.state.card)
      .then(() => this.setState({ card: {} }))
      .then(() => this.getAllCards());
  }

  deleteCard(event) {
    backEndApi.deleteCard(event.target.value)
      .then(() => this.getAllCards());
  }

  insertNewCard(event) {
    event.preventDefault();
    const { target } = event;

    this.setState({
      card: {
        name: target[0].value,
        manaCost: target[1].value,
        cmc: target[2].value,
        typeLine: target[3].value,
        oracleText: target[4].value,
        colors: target[5].value,
        magicSetName: target[6].value,
        rarity: target[7].value,
        image: target.innerHTML.split('src="')[1].split('">')[0],
      },
    }, () => {
      backEndApi.insertNewCard(this.state.card)
        .then(() => this.setState({ card: {} }))
        .then(() => this.getAllCards());
    });
  }

  findRandomCard(event) {
    event.preventDefault();
    event.persist();

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

        this.setState({ randomCard });
      });
  }

  updateCardId(event) {
    this.setState({ cardId: event.target.value });
  }

  render() {
    const { cardList, card, randomCard } = this.state;

    return (
      <main>
        <section className="card-gallery">
        <h1>Card gallery</h1>
          <CardList
            cards={cardList}
            deleteCard={this.deleteCard}
          />
        </section>
        
        <section className="card-actions">
          <div className="card-actions-top">
            <h2>Show a random card from ScryFall</h2>
            <input
              type="button"
              name="show-random-card"
              value="Show card"
              onClick={this.findRandomCard}
            />
          </div>
          <form onSubmit={this.insertNewCard}>
            <CardForm card={randomCard} onChange={this.onChange} />
            <div className="button-position">
              <input
                name="save-card"
                type="submit"
                value="Save"
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
    );
  }
}
