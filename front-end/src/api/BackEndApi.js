import * as axiosHandler from 'axios';

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

  return axios.get(`/api/cards`);
}

export const insertNewCard = (card) => {
  const axios = buildAxiosHandler();

  return axios.post(`/api/cards`, card);
}

export const deleteCard = ( id ) => {
  const axios = buildAxiosHandler();

  return axios.delete(`/api/cards/${id}`);
}