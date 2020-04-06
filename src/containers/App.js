import React, { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "../components/header/headers";
import Board from "../components/board/board";

toast.configure();

function App(props) {
  const [position, setPosition] = useState();
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const { game } = props;

  const getPosition = position => {
    setPosition(position);
  };
  const playGame = (position, player) => {
    game.play({ position: position, player: player }).then(response => {
      if (response.board) {
        setBoard(response.board);
      }
      if (response.win || response.draw) {
        const message = response.win || response.draw;
        toast.success(message, {
          autoClose:false,
          hideProgressBar: true
        });
      }
      const errors = response.error_messages;
      if (errors.length) {
        errors.forEach(message => {
          toast.error(message, {
            autoClose: 4500,
            hideProgressBar: true
          });
        });
      }
    });
  };
  return (
    <div className="App">
      <ToastContainer />
      <div className="container">
        <Header />
        <div className="newgame text-center">
          <button
            className="btn btn-success newgamebutton"
            onClick={() => game.startGame(Math.round(Math.random() * 10000))}
          >
            New Game?
          </button>
        </div>
        <Board getPosition={getPosition} game_board={board} />
      </div>
      <div className="playbuttons">
        <button
          className="btn btn-success playerone"
          onClick={() => playGame(position, 1)}
        >
          playerOne(x)
        </button>
        <button
          className="btn btn-success playertwo"
          onClick={() => playGame(position, 2)}
        >
          playerTwo(o)
        </button>
      </div>
    </div>
  );
}

export default App;
