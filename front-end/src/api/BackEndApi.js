import * as axiosHandler from 'axios';

const buildAxiosHandler = () => {
  const axios = axiosHandler.create({
    baseURL: 'http://localhost:8080',
  });

  return axios;
};

export const getAllCards = () => {
  const axios = buildAxiosHandler();

  return axios.get('/api/cards');
};

export const insertNewCard = (card) => {
  const axios = buildAxiosHandler();

  return axios.post('/api/cards', card);
};

export const deleteCard = (id) => {
  const axios = buildAxiosHandler();

  return axios.delete(`/api/cards/${id}`);
};

export const findCardById = (id) => {
  const axios = buildAxiosHandler();

  return axios.get(`/api/cards/${id}`);
};

export const editCard = (id, card) => {
  const axios = buildAxiosHandler();

  return axios.put(`/api/cards/${id}`, card);
};
