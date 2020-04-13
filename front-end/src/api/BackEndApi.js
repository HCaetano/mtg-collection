import * as axios from 'axios';

export default class CallApi {
    constructor() {
      this.api = axios.create({
        baseURL: "http://localhost:8080"
      })
    }

    getAllCards = ( params ) => axios.get( `http://localhost:8080/api/cards` );
}