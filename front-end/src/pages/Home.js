import React, { Component } from 'react';
import BackEndApi from '../api/BackEndApi';

export default class Home extends Component {
    constructor( props ) {
        super( props );
        this.backEndApi = new BackEndApi();
        this.state = {
            cards: []
        }
    }

    getAllCards = async () => {
        const response = await this.backEndApi.getAllCards();

        this.setState({
            cards: response.data
        })
    }

    insertNewCard = ( card ) => {
       this.backEndApi.insertNewCard( card );
    }

    componentDidMount() {
        this._asyncRequest = this.getAllCards();
    }

    render() {
        const { cards } = this.state;

        return (
            <div className="App">
                <ul>
                    { 
                        cards.map( card => 
                            <React.Fragment key={ card.id }>
                                <li>{ card.name }</li>
                                <li>{ card.manaCost }</li>
                                <li>{ card.typeLine }</li>
                                <li>{ card.oracleText }</li>
                                <li>{ card.colors }</li>
                                <li>{ card.magicSetName }</li>
                                <li>{ card.rarity }</li>
                            </React.Fragment>
                        ) 
                    }
                </ul>
                <form>
                    { 
                        cards.map( card => 
                            <React.Fragment key={ card.id }>
                                <input type="text" defaultValue={ card.name } />
                                <input type="text" defaultValue={ card.manaCost } />
                                <input type="text" defaultValue={ card.typeLine } />
                                <input type="text" defaultValue={ card.oracleText } />
                                <input type="text" defaultValue={ card.colors } />
                                <input type="text" defaultValue={ card.magicSetName } />
                                <input type="text" defaultValue={ card.rarity } />
                            </React.Fragment>
                        ) 
                    }

                    <input name="add-new-card" 
                           type="submit" 
                           onClick={ this.insertNewCard }
                           value="Add card to collection" />
                </form>
            </div>
        )
    }
}
