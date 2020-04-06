import { Game } from "../game";
import { FakeActions } from "../fakeActions";
const fake = new FakeActions();
const game = new Game(fake);
describe("Game", () => {

  it("should set a new gameId", async () => {
    await game.startGame(4);

    expect(game.gameId).toEqual(4);
  });

  it("should expect #play to return the board", () => {
    game.play(4, 1, 1).then(response => {
      expect(response).toEqual(["x", "o", "x"]);
    });
  });
});
