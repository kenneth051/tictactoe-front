import React from "react";

const Cell = props => {
  const { position, game_board, play } = props;
  const cssClass = `item item${position}`;
  return (
    <div
      className={cssClass}
      onClick={() => {
        play(position);
      }}
    >
      {game_board[position - 1]}
    </div>
  );
};

export default Cell;
