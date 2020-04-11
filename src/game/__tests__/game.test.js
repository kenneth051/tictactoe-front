import { Game } from "../game";
import { FakeActions } from "../../fakes/fakeActions";
import { FakeDisplay } from "../../fakes/display";

describe("Game", () => {
  var fakeutil;
  var game;
  var fakeActions;

  beforeEach(() => {
    fakeActions = new FakeActions();
    fakeutil = new FakeDisplay();
    game = new Game(fakeActions, fakeutil);
  });
  it("should set a new gameId", async () => {
    await game.startGame();
    expect(game.gameId).toBe("8bae8f80");
  });
  it("should get the default language as english ", () => {
    expect(game.language).toBe("en");
  });
  it("should change the language", () => {
    game.setlanguage("spanish");
    expect(game.language).toBe("spanish");
  });
  it("should expect getErrorMessages to return all errors", () => {
    const errors = { error: { msg: "error1", msg1: "errors" } };
    expect(game.getErrorMessages([], errors)).toEqual(["error1", "errors"]);
  });

  it("should expect #play to return the board", () => {
    game.gameOutput(4, 1, 1).then(response => {
      expect(response).toEqual({
        board: undefined,
        draw: undefined,
        error_messages: [],
        win: undefined
      });
    });
  });
  it("should expect #playGame to call the displayBoardMoves", () => {
    game.playGame(4, 1, 1, {}, {}).then(() => {
      expect(fakeutil.displayBoardMovesisCalled()).toEqual(true);
    });
  });
  it("should expect #playGame to call the displayWinMessage", () => {
    game.playGame(4, 1, 1, {}, {}).then(() => {
      expect(fakeutil.displayWinMessageisCalled()).toEqual(true);
    });
  });
  it("should expect #playGame to call the displayDrawMessage", () => {
    game.playGame(4, 1, 1, {}, {}).then(() => {
      expect(fakeutil.displayDrawMessageisCalled()).toEqual(true);
    });
  });
  it("should expect #playGame to call the displayErrors", () => {
    game.playGame(4, 1, 1, {}, {}).then(() => {
      expect(fakeutil.displayErrorsisCalled()).toEqual(true);
    });
  });
  it("should expect #getGamePlayer to return player 1 for first move", () => {
    expect(game.getGamePlayer()).toEqual(1);
  });
  it("should expect #getGamePlayer to return player 2 for second move", () => {
    game.trackPlayers = [1];
    expect(game.getGamePlayer()).toEqual(2);
  });
  it("should expect #getGamePlayer to return player 1 for third move", () => {
    game.trackPlayers = [1, 2];
    expect(game.getGamePlayer()).toEqual(1);
  });
});
