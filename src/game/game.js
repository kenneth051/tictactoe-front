import { Display } from "../display/display";

export class Game {
  constructor(action, util = new Display()) {
    this.gameId = 0;
    this.action = action;
    this.util = util;
    this.trackPlayers = [];
    this.language = "en";
    this.win = false;
  }
  setlanguage(language) {
    this.language = language;
  }

  getGamePlayer() {
    const currentPlayer = { 1: 2, 2: 1 };

    if (this.trackPlayers.length === 0) {
      this.trackPlayers.push(1);
    } else {
      const lastPlayer = this.trackPlayers[this.trackPlayers.length - 1];
      const nextPlayer = currentPlayer[lastPlayer];
      this.trackPlayers.push(nextPlayer);
    }
    return this.trackPlayers[this.trackPlayers.length - 1];
  }

  startGame = async () => {
    this.win = false;
    this.trackPlayers = [];
    const response = await this.action.startGame();
    if (response.hasOwnProperty("game_data")) {
      this.gameId = Object.keys(response["game_data"])[0];
    }
  };
  getErrorMessages = (error_messages_array, response) => {
    if (response.hasOwnProperty("error")) {
      const errors = response.error;
      Object.keys(errors).forEach(item => {
        error_messages_array.push(errors[item]);
      });
    }
    return error_messages_array;
  };
  gameOutput = async ({ gameId = this.gameId, position, player }) => {
    var error_messages = [];
    const response = await this.action.playGame(
      gameId,
      position,
      player,
      this.language
    );
    return {
      board: response.game,
      error_messages: this.getErrorMessages(error_messages, response),
      win: response.win,
      draw: response.draw
    };
  };
  playGame = async (position, toast, setBoard) => {
    if (!this.win) {
      const response = await this.gameOutput({
        position: position,
        player: this.getGamePlayer()
      });
      this.util.displayBoardMoves(response.board, setBoard);
      this.util.displayWinMessage(response, toast, this);
      this.util.displayDrawMessage(response, toast);
      this.util.displayErrors(response.error_messages, toast);
    }
  };
}
