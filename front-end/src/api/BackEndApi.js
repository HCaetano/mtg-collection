import * as axiosHandler from 'axios';

  // insertNewCard = ( card ) => this.axios.post( `/api/cards`, card );

  // deleteCard = ( id ) => this.axios.delete( `/api/cards/${ id }` );

  // editCard = ( id, card ) => this.axios.put(`/api/cards/${ id }`, card);

  // findCardById = ( id ) => this.axios.get( `/api/cards/${ id }` );

const buildAxiosHandler = () => {
  const axios = axiosHandler.create({
    baseURL: "http://localhost:8080"
  });

  return axios;
}

export const getAllCards = () => {
  const axios = buildAxiosHandler();

  return axios.get( `/api/cards` );
}