import * as axiosHandler from "axios";

export const findRandomCard = () => {
  const axios = axiosHandler.create({
    baseURL: "https://api.scryfall.com",
  });

  return axios.get("/cards/random");
};

export const findCardByName = (cardName) => {
  const axios = axiosHandler.create({
    baseURL: "https://api.scryfall.com",
  });

  return axios.get(`/cards/search?q=${cardName}`);
};
