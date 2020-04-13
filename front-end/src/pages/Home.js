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

        if ( response ) {
            this.setState({
                cards: response.data
            })
        }
    }

    componentDidMount() {
        this._asyncRequest = this.getAllCards();
    }

    render() {
        const { cards } = this.state;

        return (
            <div className="App">
                <ul>
                    { cards.map( card => <li key={ card.id }>{ card.name }</li> ) }
                </ul>
            </div>
        )
    }
}
