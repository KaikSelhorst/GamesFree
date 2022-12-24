import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games",
  Origin: "https://www.freetogame.com/api/games",
});
const axiosInstanceGame = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game",
  Origin: "https://www.freetogame.com/api/game",
});

export const api = {
  async get(url) {
    const { data } = await axiosInstance.get(url);
    return data;
  },
  async getGame(game) {
    const { data } = await axiosInstanceGame.get("?id=" + game);
    return data;
  },
};
