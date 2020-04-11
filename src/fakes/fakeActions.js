export class FakeActions {
  async startGame(id) {
    return await {
      game_data: { "8bae8f80": { state: [] } }
    };
  }
  async playGame(gameId, position, player) {
    return await ["x", "o", "x"];
  }
}
