const baseURL = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const gameURL =
  "https://free-to-play-games-database.p.rapidapi.com/api/game?id=";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1c76ecaa0amshca2181b2277ed20p1188bejsn1cdb084430a4",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const api = {
  async get(url) {
    if (url === "/") url = "";
    try {
      const res = await fetch(`${baseURL}${url}`, options);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getGame(game) {
    try {
      const res = await fetch(`${gameURL}${game}`, options);
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
