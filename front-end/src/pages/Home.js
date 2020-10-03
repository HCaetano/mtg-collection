import React, { Component } from 'react';
import * as backEndApi from '../api/BackEndApi';
import * as scryFallApi from '../api/ScryFallApi';
import CardForm from '../components/CardForm';
import CardList from '../components/CardList';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      cardList: [],
      randomCard: {},
      card: {},
      newCard: {}
    }

    this.insertNewCard = this.insertNewCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.findCardById = this.findCardById.bind(this);
    this.editCard = this.editCard.bind(this);
    this.findRandomCard = this.findRandomCard.bind(this);
    this.updateCardId = this.updateCardId.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeRandomCard = this.onChangeRandomCard.bind(this);
  }

  async getAllCards() {
    const response = await backEndApi.getAllCards();

    this.setState({
      cardList: response.data
    });
  }

  insertNewCard(event) {
    event.preventDefault()

    this.setState({
      newCard: {
        name: event.target[0].value,
        manaCost: event.target[1].value,
        cmc: event.target[2].value,
        typeLine: event.target[3].value,
        oracleText: event.target[4].value,
        colors: event.target[5].value,
        magicSetName: event.target[6].value,
        rarity: event.target[7].value
      }
    }, () => {
      backEndApi.insertNewCard(this.state.newCard)
        .then(() => this.setState({
          newCard: {}
        }))
        .then(() =>
          this.getAllCards()
        )
    });
  }

  deleteCard(event) {
    backEndApi.deleteCard(event.target.value)
      .then(() =>
        this.getAllCards()
      );
  }

  editCard(event) {
    event.preventDefault();

    backEndApi.editCard(this.state.cardId, this.state.card)
      .then(() => this.setState({
        card: {}
      }))
      .then(() =>
        this.getAllCards()
      );
  }

  findCardById(event) {
    event.preventDefault()
    event.persist();

    backEndApi.findCardById(this.state.cardId)
      .then(response => {
        this.setState({
          card: response.data
        })
      });
  }

  findRandomCard(event) {
    event.preventDefault()
    event.persist();

    scryFallApi.findRandomCard()
      .then(response => {
        const randomCard = {
          name: response.data.name,
          manaCost: response.data.mana_cost,
          cmc: response.data.cmc,
          typeLine: response.data.type_line,
          oracleText: response.data.oracle_text,
          colors: response.data.colors.toString(),
          magicSetName: response.data.set_name,
          rarity: response.data.rarity,
          image: response.data.image_uris.small
        };

        this.setState({ randomCard });
      })
  }

  updateCardId(event) {
    this.setState({
      cardId: event.target.value
    });
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      card: {
        ...prevState.card,
        [name]: value
      }
    }));
  }

  onChangeRandomCard(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      randomCard: {
        ...prevState.card,
        [name]: value
      }
    }));
  }

  componentDidMount() {
    this._asyncRequest = this.getAllCards();
  }

  render() {
    const { cardList, card, randomCard } = this.state;

    return (
      <div className="App">
        <h1>Card gallery</h1>
        <CardList cards={ cardList }/>

        <h2>Show a random card from ScryFall</h2>
        <form>
          <input type="button" name="show-random-card" value="Show card" onClick={this.findRandomCard} />
        </form>
        <form onSubmit={this.insertNewCard}>
          <CardForm card={randomCard} onChange={this.onChange} />
          <input name="save-card"
            type="submit"
            value="Save" />
        </form>

        <h2>Find a card in the database by its id</h2>
        <form>
          <input type="text" placeholder="Type the card's id" name="search" onBlur={this.updateCardId} />
          <input type="button" name="find-card" value="Find card" onClick={this.findCardById} />
        </form>

        <h2>Edit a card from the database</h2>
        <form onSubmit={this.editCard}>
          <CardForm card={card} onChange={this.onChange} />
          <input name="edit-card"
            type="submit"
            value="Save modifications" />
        </form>
      </div>
    )
  }
}
