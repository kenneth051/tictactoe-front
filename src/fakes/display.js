export class FakeBoardDisplay {
  constructor() {
    this.setBoardCalled = false;
  }
  setBoard = sampleBoard => {
    this.setBoardCalled = true;
    return;
  };
  setBoardIsCalled = () => {
    return this.setBoardCalled;
  };
}

export class FakeDisplay {
  constructor() {
    this.getboardiscalled = false;
    this.displaywinmessageiscalled = false;
    this.displaydrawmessageiscalled = false;
    this.displayerrorsiscalled = false;
  }
  displayBoardMoves(response, setBoard) {
    this.getboardiscalled = true;
  }
  displayBoardMovesisCalled() {
    return this.getboardiscalled;
  }
  displayWinMessage(response, toast, game) {
    this.displaywinmessageiscalled = true;
    game.win = true;
  }
  displayWinMessageisCalled() {
    return this.displaywinmessageiscalled;
  }
  displayDrawMessage(response, toast) {
    this.displaydrawmessageiscalled = true;
  }
  displayDrawMessageisCalled() {
    return this.displaydrawmessageiscalled;
  }
  displayErrors(response, toast) {
    this.displayerrorsiscalled = true;
  }
  displayErrorsisCalled() {
    return this.displayerrorsiscalled;
  }
}

export class FakeToast {
  constructor() {
    this.isCalled = false;
  }
  success = message => {
    this.isCalled = true;
    return true;
  };
  info = message => {
    this.isCalled = true;
    return true;
  };
  successIsCalled() {
    return this.isCalled;
  }
  error = message => {
    this.isCalled = true;
    return true;
  };
  errorIsCalled() {
    return this.isCalled;
  }
  infoIsCalled() {
    return this.isCalled;
  }
}
