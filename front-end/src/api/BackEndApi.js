import * as axios from 'axios';

export default class BackEndApi {
    constructor() {
      this.axios = axios.create({
        baseURL: "http://localhost:8080"
      })
    }

    getAllCards = () => this.axios.get( `/api/cards` );

    insertNewCard = ( card ) => this.axios.post( `/api/cards`, card );

    deleteCard = ( id ) => this.axios.delete( `/api/cards/${ id }` );

    editCard = ( id, card ) => this.axios.put(`/api/cards/${ id }`, card);

    findCardById = ( id ) => this.axios.get( `/api/cards/${ id }` );
}