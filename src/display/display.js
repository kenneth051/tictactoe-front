export class Display {
  displayErrors = (message, toast) => {
    toast.error(message, {
      autoClose: 4500,
      hideProgressBar: true
    });
  };
  displayBoardMoves = (board, setBoard) => {
    if (board) {
      setBoard(board);
    }
  };
  displayWinMessage = (response, toast) => {
    toast.success(response.win, {
      autoClose: false,
      hideProgressBar: true
    });
  };
  displayDrawMessage = (response, toast) => {
    toast.info(response.draw, {
      autoClose: false,
      hideProgressBar: true
    });
  };
}
