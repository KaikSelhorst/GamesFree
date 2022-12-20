import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.freetogame.com/api/games",
});

export const api = {
  async get(url) {
    const { data } = await axiosInstance.get(url);
    return data;
  },
  async getGame(game) {
    const { data } = await axios.get(
      `https://www.freetogame.com/api/game?id=${game}`
    );
    return data;
  },
};
