import React, { Component } from 'react';
import * as backEndApi from '../api/BackEndApi';
import * as scryFallApi from '../api/ScryFallApi';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      cardList: [],
      randomCard: {},
      card: {},
      newCard: {}
    }
  }

  async getAllCards() {
    const response = await backEndApi.getAllCards();

    this.setState({
      cardList: response.data
    });
  }

  insertNewCard = (event) => {
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
    })
  }

  // deleteCard = (event) => {
  //   backEndApi.deleteCard(event.target.value)
  //     .then(() =>
  //       this.getAllCards()
  //     )
  // }

  // editCard = (event) => {
  //   event.preventDefault();

  //   backEndApi.editCard(this.state.cardId, this.state.card)
  //     .then(() => this.setState({
  //       card: {}
  //     }))
  //     .then(() =>
  //       this.getAllCards()
  //     );
  // }

  // findCardById = (event) => {
  //   event.preventDefault()
  //   event.persist();

  //   backEndApi.findCardById(this.state.cardId)
  //     .then(response => {
  //       this.setState({
  //         card: response.data
  //       })
  //     })
  // }

  findRandomCard = (event) => {
    event.preventDefault()
    event.persist();

    scryFallApi.findRandomCard()
      .then(response => {
        this.setState({
          randomCard: {
            name: response.data.name,
            manaCost: response.data.mana_cost,
            cmc: response.data.cmc,
            typeLine: response.data.type_line,
            oracleText: response.data.oracle_text,
            colors: response.data.colors.toString(),
            magicSetName: response.data.set_name,
            rarity: response.data.rarity,
            image: response.data.image_uris.small
          }
        })
      })
  }

  updateCardId = (event) => {
    this.setState({
      cardId: event.target.value
    })
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      card: {
        ...prevState.card,
        [name]: value
      }
    })
    )
  }

  onChangeRandomCard = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      randomCard: {
        ...prevState.card,
        [name]: value
      }
    })
    )
  }

  componentDidMount() {
    this._asyncRequest = this.getAllCards();
  }

  render() {
    const { cardList, card, randomCard } = this.state;

    return (
      <div className="App">
        <h1>Card gallery</h1>
        {
          cardList.length > 0
            ? cardList.map(card =>
              <React.Fragment key={card.id}>
                <ul>
                  <li>{card.name}</li>
                  <li>{card.manaCost}</li>
                  <li>{card.cmc}</li>
                  <li>{card.typeLine}</li>
                  <li>{card.oracleText}</li>
                  <li>{card.colors}</li>
                  <li>{card.magicSetName}</li>
                  <li>{card.rarity}</li>
                  <button onClick={this.deleteCard} value={card.id}>Delete</button>
                </ul>
              </React.Fragment>
            )
            : "There are no cards to show."
        }

        <h2>Show a random card from ScryFall</h2>

        <form>
          <input type="button" name="show-random-card" value="Show card" onClick={this.findRandomCard} />
        </form>

        {
          <form onSubmit={this.insertNewCard}>
            <img src={randomCard.image} alt=""></img>
            <label>Name:</label>
            <input type="text" name="name" value={randomCard.name || ''} onChange={this.onChangeRandomCard} />
            <label>Mana cost:</label>
            <input type="text" name="manaCost" value={randomCard.manaCost || ''} onChange={this.onChangeRandomCard} />
            <label>CMC:</label>
            <input type="text" name="cmc" value={randomCard.cmc || ''} onChange={this.onChangeRandomCard} />
            <label>Type line:</label>
            <input type="text" name="typeLine" value={randomCard.typeLine || ''} onChange={this.onChangeRandomCard} />
            <label>Oracle text:</label>
            <input type="text" name="oracleText" value={randomCard.oracleText || ''} onChange={this.onChangeRandomCard} />
            <label>Colors:</label>
            <input type="text" name="colors" value={randomCard.colors || ''} onChange={this.onChangeRandomCard} />
            <label>Magic set:</label>
            <input type="text" name="magicSetName" value={randomCard.magicSetName || ''} onChange={this.onChangeRandomCard} />
            <label>Rarity:</label>
            <input type="text" name="rarity" value={randomCard.rarity || ''} onChange={this.onChangeRandomCard} />
            <input name="save-card"
              type="submit"
              value="Save" />
          </form>
        }

        <h2>Find a card in the database by its id</h2>

        <form>
          <input type="text" placeholder="Type the card's id" name="search" onBlur={this.updateCardId} />
          <input type="button" name="find-card" value="Find card" onClick={this.findCardById} />
        </form>

        <h2>Edit a card from the database</h2>
        {
          <form onSubmit={this.editCard}>
            <label>Name:</label>
            <input type="text" name="name" value={card.name || ''} onChange={this.onChange} />
            <label>Mana cost:</label>
            <input type="text" name="manaCost" value={card.manaCost || ''} onChange={this.onChange} />
            <label>CMC:</label>
            <input type="text" name="cmc" value={card.cmc || ''} onChange={this.onChange} />
            <label>Type line:</label>
            <input type="text" name="typeLine" value={card.typeLine || ''} onChange={this.onChange} />
            <label>Oracle text:</label>
            <input type="text" name="oracleText" value={card.oracleText || ''} onChange={this.onChange} />
            <label>Colors:</label>
            <input type="text" name="colors" value={card.colors || ''} onChange={this.onChange} />
            <label>Magic set:</label>
            <input type="text" name="magicSetName" value={card.magicSetName || ''} onChange={this.onChange} />
            <label>Rarity:</label>
            <input type="text" name="rarity" value={card.rarity || ''} onChange={this.onChange} />
            <input name="edit-card"
              type="submit"
              value="Save modifications" />
          </form>
        }
      </div>
    )
  }
}
