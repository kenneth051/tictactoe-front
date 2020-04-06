export class Game {
  constructor(action) {
    this.gameId = 0;
    this.action = action;
  }

  startGame = async id => {
    const response = await this.action.startGame(id);
    if (response.hasOwnProperty("game_data")) {
      this.gameId = id;
    }
  };
  play = async ({ gameId = this.gameId, position, player }) => {
    var error_messages = [];
    const response = await this.action.playGame(gameId, position, player);
    if (response.hasOwnProperty("error")) {
      const errors = response.error;
      Object.keys(errors).forEach(item => {
        error_messages.push(errors[item]);
      });
    }
    return {
      board: response.game,
      error_messages: error_messages,
      win: response.win,
      draw: response.draw
    };
  };
}
