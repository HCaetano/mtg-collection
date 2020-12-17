import * as axiosHandler from 'axios';

const findRandomCard = () => {
  const axios = axiosHandler.create({
    baseURL: 'https://api.scryfall.com',
  });

  return axios.get('/cards/random');
};

export default findRandomCard;
