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
