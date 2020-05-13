import * as axios from 'axios';

export default class CallApi {
    constructor() {
      this.api = axios.create({
        baseURL: "http://localhost:8080"
      })
    }

    getAllCards = () => axios.get( `http://localhost:8080/api/cards` );

    insertNewCard = ( card ) => {
      axios.post( `http://localhost:8080/api/cards`, card )
        .then(response => console.log(response));
    }
}