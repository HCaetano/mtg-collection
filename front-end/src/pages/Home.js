import React, { Component } from 'react';
import BackEndApi from '../api/BackEndApi';

export default class Home extends Component {
    constructor( props ) {
        super( props );
        this.backEndApi = new BackEndApi();
        this.state = {
            cardList: [],
            card: {},
            newCard: {}
        }
    }

    getAllCards = async () => {
        const response = await this.backEndApi.getAllCards();

        this.setState({
            cardList: response.data
        })
    }

    insertNewCard = ( event ) => {
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
            this.backEndApi.insertNewCard( this.state.newCard )
                .then( () => this.setState({
                    newCard: {}
                }))
                .then( () => 
                    this.getAllCards()
                )
        })
    }

    deleteCard = ( event ) => {
        this.backEndApi.deleteCard( event.target.value )
            .then( () => 
                this.getAllCards()
            )
    }

    editCard = ( event ) => {
        event.preventDefault();

        this.backEndApi.editCard( this.state.cardId, this.state.card )
            .then( () => this.setState({
                card: {}
            }))
            .then( () => 
                this.getAllCards()
            );
    }

    findCardById = ( event ) => {
        event.preventDefault()
        event.persist();

        this.backEndApi.findCardById( this.state.cardId )
            .then( response => {
                this.setState({
                    card: response.data
                })
            })
    }

    updateCardId = ( event ) => {
        this.setState({
            cardId: event.target.value
        })
    }

    onChange = ( event ) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState( prevState => ({
            card: {
                ...prevState.card,
                [name]: value
            }})
        )
    }

    componentDidMount() {
        this._asyncRequest = this.getAllCards();
    }

    render() {
        const { cardList, card } = this.state;
        
        return (
            <div className="App">
                <h1>Card gallery</h1>
                { 
                    cardList.length > 0 
                    ? cardList.map( card => 
                        <React.Fragment key={ card.id }>
                            <ul>
                                <li>{ card.name }</li>
                                <li>{ card.manaCost }</li>
                                <li>{ card.cmc }</li>
                                <li>{ card.typeLine }</li>
                                <li>{ card.oracleText }</li>
                                <li>{ card.colors }</li>
                                <li>{ card.magicSetName }</li>
                                <li>{ card.rarity }</li>
                                <button onClick={ this.deleteCard } value={ card.id }>Delete</button>
                            </ul>
                        </React.Fragment>
                    ) 
                    : "There are no cards to show." 
                }

                <h2>Find a card in the database by its id</h2>

                <form>
                    <input type="text" placeholder="Type the card's id" name="search" onBlur={ this.updateCardId } />
                    <input type="button" name="find-card" value="Find card" onClick={ this.findCardById }/>
                </form>

                <h2>Edit a card from the database</h2>
                { 
                    <form onSubmit={ this.editCard }>
                        <React.Fragment>
                            <input type="text" name="name" value={ card.name || '' } onChange={ this.onChange }/>
                            <input type="text" name="manaCost" value={ card.manaCost || '' } onChange={ this.onChange }/>
                            <input type="text" name="cmc" value={ card.cmc || '' } onChange={ this.onChange }/>
                            <input type="text" name="typeLine" value={ card.typeLine || '' } onChange={ this.onChange }/>
                            <input type="text" name="oracleText" value={ card.oracleText || '' } onChange={ this.onChange }/>
                            <input type="text" name="colors" value={ card.colors || '' } onChange={ this.onChange }/>
                            <input type="text" name="magicSetName" value={ card.magicSetName || '' } onChange={ this.onChange }/>
                            <input type="text" name="rarity" value={ card.rarity || '' } onChange={ this.onChange }/>
                        </React.Fragment>
                        <input name="edit-card" 
                            type="submit" 
                            value="Save modifications" />
                    </form>
                }
            </div>
        )
    }
}
