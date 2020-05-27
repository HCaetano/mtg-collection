import * as axios from 'axios';

export default class BackEndApi {
    constructor() {
      this.axios = axios.create({
        baseURL: "http://localhost:8080"
      })
    }

    getAllCards = () => this.axios.get( `/api/cards` );

    insertNewCard = ( card ) => this.axios.post( `/api/cards`, card );

    findCardById = ( id ) => this.axios.get( `/api/cards/${ id }` );
}