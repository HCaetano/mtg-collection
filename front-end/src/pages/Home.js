import React, { Component } from 'react';
import BackEndApi from '../api/BackEndApi';
import * as axios from 'axios';

export default class Home extends Component {
    constructor( props ) {
        super( props );
        this.backEndApi = new BackEndApi();
        this.state = {
            cards: []
        }

        this.api = axios.create({
            baseURL: "http://localhost:8080"
          })

    }

    getAllCards = async () => {
        const response = await this.backEndApi.getAllCards();

        this.setState({
            cards: response.data
        })
    }

    insertNewCard = ( event ) => {
        event.preventDefault()

        const card = {
            name: event.target[0].value,
            manaCost: event.target[1].value,
            cmc: event.target[2].value,
            typeLine: event.target[3].value,
            oracleText: event.target[4].value,
            colors: event.target[5].value,
            magicSetName: event.target[6].value,
            rarity: event.target[7].value
        }
        
       this.backEndApi.insertNewCard( card );
    }

    findCardById = ( event ) => {
        event.preventDefault()
        event.persist();

        let card = this.backEndApi.findCardById( event.target[0].value )
            .then(response => card = response.data)
            .catch(error => console.log(error));

            // assim funciona
            // await axios.get( `http://localhost:8080/api/cards/${ event.target[0].value }` )
            //     .then(response => {
            //         console.log("no then")
            //         promise = response
            //         card = promise.data
            //     }
            // )

    }

    componentDidMount() {
        this._asyncRequest = this.getAllCards();
    }

    render() {
        const { cards } = this.state;
        
        return (
            <div className="App">
                <h1>Card gallery</h1>
                { 
                    cards.length > 0 
                    ? cards.map( card => 
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
                    cards.length > 0 
                    ?   <form onSubmit={ this.insertNewCard }>
                            <React.Fragment>
                                <input type="text" defaultValue={ cards[0].name } />
                                <input type="text" defaultValue={ cards[0].manaCost } />
                                <input type="text" defaultValue={ cards[0].cmc } />
                                <input type="text" defaultValue={ cards[0].typeLine } />
                                <input type="text" defaultValue={ cards[0].oracleText } />
                                <input type="text" defaultValue={ cards[0].colors } />
                                <input type="text" defaultValue={ cards[0].magicSetName } />
                                <input type="text" defaultValue={ cards[0].rarity } />
                            </React.Fragment>
                            <input name="add-new-card" 
                                type="submit" 
                                value="Add card to collection" />
                        </form>
                    
                    : "There are no cards to show." 
                }
            </div>
        )
    }
}
