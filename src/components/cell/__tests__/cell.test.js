import React from "react";
import { shallow} from "enzyme";
import Cell from "../cell";

const play = jest.fn();
const fakeboard = ["", "", "", "", "", "", "", "", ""];

describe("Board", () => {
  var cell;
  beforeEach(() => {
    cell = shallow(<Cell position={2} game_board={fakeboard} play={play} />);
  });

  it("should ensure that the game squares are clickable", () => {
    cell.find(".item").simulate("click");
    expect(play).toHaveBeenCalled();
  });
});
