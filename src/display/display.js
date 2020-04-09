export class Display {
  displayErrors = (errors, toast) => {
    if (errors.length) {
      errors.forEach(message => {
        toast.error(message, {
          autoClose: 4500,
          hideProgressBar: true
        });
      });
    }
  };
  displayBoardMoves = (board, setBoard) => {
    if (board) {
      setBoard(board);
    }
  };
  displayWinMessage = (response, toast) => {
    if (response.win) {
      toast.success(response.win, {
        autoClose: false,
        hideProgressBar: true
      });
    }
  };
  displayDrawMessage = (response, toast) => {
    if (response.draw) {
      toast.info(response.draw, {
        autoClose: false,
        hideProgressBar: true
      });
    }
  };
}
