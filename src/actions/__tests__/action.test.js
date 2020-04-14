import { Actions } from "../actions";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);
const actions = new Actions();

describe("Actions", () => {
  it("should expect #startGameAction to send a request", done => {
    const response_data = {
      message: "game started successfully",
      game_data: { "1": " " }
    };
    mock.onPost("http://localhost:9292/startgame").reply(200, response_data);
    actions.startGame(12).then(response => {
      expect(response).toEqual(response_data);
      done();
    });
  });

  it("should expect #playGame to send a request", done => {
    const response_data = {
      game: []
    };
    mock.onPost("http://localhost:9292/play").reply(200, response_data);
    actions.playGame(12, 1, 1).then(response => {
      expect(response).toEqual(response_data);
      done();
    });
  });
});
