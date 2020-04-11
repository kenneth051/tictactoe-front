import React from "react";

const Cell = props => {
  const { position, game_board, play } = props;
  return (
    <div
      className="item"
      onClick={() => {
        play(position);
      }}
    >
      {game_board[position - 1]}
    </div>
  );
};

export default Cell;
