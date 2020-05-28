import React, { Component } from 'react';
import BackEndApi from '../api/BackEndApi';

export default class Home extends Component {
    constructor( props ) {
        super( props );
        this.backEndApi = new BackEndApi();
        this.state = {
            cardList: [],
            card: {}
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
            card: {
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
            this.backEndApi.insertNewCard( this.state.card )
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

    findCardById = ( event ) => {
        event.preventDefault()
        event.persist();

        this.backEndApi.findCardById( event.target[0].value )
            .then( response => {
                this.setState({
                    card: response.data
                })
            })
    }

    componentDidMount() {
        this._asyncRequest = this.getAllCards();
    }

    render() {
        const { cardList } = this.state;
        
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
                                <button onClick={ this.deleteCard } value={ card.id }>Remover</button>
                            </ul>
                        </React.Fragment>
                    ) 
                    : "There are no cards to show." 
                }

                <h2>Find a card using its id</h2>

                <form onSubmit={ this.findCardById }>
                    <input type="text" placeholder="Type the card's id" name="search" />
                    <input type="submit" name="find-card" value="Find card"/>
                </form>

                <h2>Add a card to database</h2>
                { 
                    cardList.length > 0 
                    ?   <form onSubmit={ this.insertNewCard }>
                            <React.Fragment>
                                <input type="text" defaultValue={ cardList[0].name } />
                                <input type="text" defaultValue={ cardList[0].manaCost } />
                                <input type="text" defaultValue={ cardList[0].cmc } />
                                <input type="text" defaultValue={ cardList[0].typeLine } />
                                <input type="text" defaultValue={ cardList[0].oracleText } />
                                <input type="text" defaultValue={ cardList[0].colors } />
                                <input type="text" defaultValue={ cardList[0].magicSetName } />
                                <input type="text" defaultValue={ cardList[0].rarity } />
                            </React.Fragment>
                            <input name="add-new-card" 
                                type="submit" 
                                value="Add card to collection" />
                        </form>
                    :   <form onSubmit={ this.insertNewCard }>
                            <React.Fragment>
                                <input type="text" defaultValue={ 'Name' } />
                                <input type="text" defaultValue={ 'Mana cost' } />
                                <input type="text" defaultValue={ 'CMC' } />
                                <input type="text" defaultValue={ 'Type line' } />
                                <input type="text" defaultValue={ 'Oracle text' } />
                                <input type="text" defaultValue={ 'Colors' } />
                                <input type="text" defaultValue={ 'Set name' } />
                                <input type="text" defaultValue={ 'Rarity' } />
                            </React.Fragment>
                            <input name="add-new-card" 
                                type="submit" 
                                value="Add card to collection" />
                        </form>
                }
            </div>
        )
    }
}
