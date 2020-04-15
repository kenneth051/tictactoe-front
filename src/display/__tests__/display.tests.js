import { Display } from "../display";
import { FakeBoardDisplay, FakeToast } from "../../fakes/display";

describe("Display", () => {
  var util;
  beforeEach(() => {
    util = new Display();
  });
  it("should set the board  if array passed in has elements", () => {
    const board = new FakeBoardDisplay();
    util.displayBoardMoves(["x", "o"], board.setBoard);
    expect(board.setBoardIsCalled()).toBe(true);
  });
  it("should not set the board  if array passed has no elements", () => {
    const board = new FakeBoardDisplay();
    util.displayBoardMoves(false, board.setBoard);
    expect(board.setBoardIsCalled()).toBe(false);
  });
  it("should call success toast if we have a winning message", () => {
    const toast = new FakeToast();
    const response = { win: true };
    const fakeWin ={win:false}
    util.displayWinMessage(response, toast,fakeWin);
    expect(toast.successIsCalled()).toBe(true);
  });

  it("should call info toast if we have a draw message", () => {
    const toast = new FakeToast();
    const response = { draw: true };
    util.displayDrawMessage(response, toast);
    expect(toast.infoIsCalled()).toBe(true);
  });
  
  it("should call error toast if we have an error message", () => {
    const toast = new FakeToast();
    util.displayErrors(["error"], toast);
    expect(toast.errorIsCalled()).toBe(true);
  });
  it("should not call error toast if we have no error message", () => {
    const toast = new FakeToast();
    util.displayErrors([], toast);
    expect(toast.errorIsCalled()).toBe(false);
  });
});
