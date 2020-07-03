import * as axios from 'axios';

export default class ScryFallApi {
    constructor() {
      this.axios = axios.create({
        baseURL: "https://api.scryfall.com"
      })
    }

    findRandomCard = () => this.axios.get( `/cards/random` );
}