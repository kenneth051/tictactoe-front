const axios = require("axios");

export class Actions {
  startGame(id) {
    return axios
      .post("http://localhost:9292/startgame", {
        game_id: id
      })
      .then(response => {
        return response.data;
      });
  }

  playGame(gameId, position, player) {
    return axios
      .post("http://localhost:9292/play", {
        game_id: gameId,
        position: position,
        player: player
      })
      .then(response => {
        return response.data;
      });
  }
}
