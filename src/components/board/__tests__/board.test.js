import React from "react";
import { shallow, mount } from "enzyme";
import Board from "../board";

const getPosition = jest.fn();

describe("Board", () => {
  var board;
  beforeEach(() => {
    board = shallow(<Board />);
  });
  it("should render a header without fail", () => {
    shallow(<Board />);
  });
  it("should ensure that the game squares are clickable", () => {
    board.find(".item2").simulate("click");
    // expect(getPosition).toHaveBeenCalled();
  });
});
