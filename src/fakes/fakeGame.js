export class FakeGame{
    constructor(action){
        this.gameId = 0;
        this.iscalled =false;
    }
    startGame(id){
        this.gameId=id
    }


}