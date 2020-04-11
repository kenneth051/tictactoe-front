import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "../components/header/headers";
import Board from "../components/board/board";
import Language from "../components/language/language";

toast.configure();

function App(props) {
  const [position, setPosition] = useState();
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const { game } = props;

  const Play = position => {
    setPosition(position);
    game.playGame(position, toast, setBoard);
  };
  const newGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    game.startGame()
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="container">
        <Header />
        <div className="newgame">
          <button className="btn newgamebutton" onClick={() => newGame()}>
            Click For New Game
          </button>
        </div>

        <div className="row">
          <div className="col-lg-2">
            <Language game={game} />
          </div>
          <div className="col-lg-10">
            <Board play={Play} game_board={board} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
