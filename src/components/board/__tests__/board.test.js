import React from "react";
import { shallow } from "enzyme";
import Board from "../board";

const play = jest.fn();
const fakeboard = ["", "", "", "", "", "", "", "", ""];

describe("Board", () => {
  var board;
  beforeEach(() => {
    board = shallow(<Board game_board={fakeboard} play={play} />);
  });
  it("should render a header without fail", () => {
    shallow(<Board game_board={fakeboard} play={play} />);
  });
  it("should render a header without fail", () => {
    const cell = board.find("Cell");
    expect(cell.length).toBe(9);
  });
});
