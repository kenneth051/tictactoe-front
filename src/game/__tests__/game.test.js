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
  it("should expect #isGameWon to call the displayWinMessage", () => {
    game.isGameWon({ win: true }, {});
    expect(fakeutil.displayWinMessageisCalled()).toEqual(true);
  });
  it("should expect win is set t0 true when #isGameWon is called", () => {
    expect(game.win).toEqual(false);
    game.isGameWon({ win: true }, {});
    expect(game.win).toEqual(true);
  });
  it("should expect #isGameDrawn to call the displayDrawMessage", () => {
    game.isGameDrawn({ draw: true }, {});
    expect(fakeutil.displayDrawMessageisCalled()).toEqual(true);
  });
  it("should expect #playGame to call the isGameWon", () => {
    game.isGameWon = jest.fn();
    game.playGame(4, 1, 1, {}, {}).then(() => {
      expect(game.isGameWon).toHaveBeenCalled();
    });
  });
  it("should expect #playGame to call the isGameDrawn", () => {
    game.isGameDrawn = jest.fn();
    game.playGame(4, 1, 1, {}, {}).then(() => {
      expect(game.isGameDrawn).toHaveBeenCalled();
    });
  });
  it("should expect #gameErrors to call the displayErrors", () => {
    game.gameErrors(["errors"],{})
      expect(fakeutil.displayErrorsisCalled()).toEqual(true);
  });
  it("should expect #gameErrors to have been called", () => {
    game.gameErrors=jest.fn()
    game.playGame(4, 1, 1, {}, {}).then(() => {
      expect(game.gameErrors).toHaveBeenCalled();
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
