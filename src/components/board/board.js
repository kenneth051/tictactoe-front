import React from "react";
import "./board.css";
import Cell from "../cell/cell";

const Board = props => {
  const { game_board, play } = props;
  let cells = [];
  for (var i = 0; i < 9; i++) {
    cells.push(<Cell key ={i} position={i + 1} game_board={game_board} play={play} />);
  }
  return (
    <div>
      <div className="parent-div">{cells}</div>
    </div>
  );
};

export default Board;
