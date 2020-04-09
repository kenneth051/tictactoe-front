import React, { useState } from "react";
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

  const Play = position => {
    setPosition(position);
    game.playGame(position, toast, setBoard);
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
        <Board play={Play} game_board={board} />
      </div>
    </div>
  );
}

export default App;
