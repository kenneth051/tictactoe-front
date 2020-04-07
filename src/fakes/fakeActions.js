export class FakeActions{

    async startGame(id){
        return await {"game_data":{}}
    }
    async playGame(gameId, position, player){
        return await ["x","o","x"]
    }
}