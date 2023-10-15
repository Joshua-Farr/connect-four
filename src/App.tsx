import "./App.css";
import GameBoard from "./components/GameBoard/Gameboard";
import ConnectFour from "./ConnectFour";
import { useState, useEffect } from "react";

function App() {
  const [column, setColumn] = useState(0);

  const connectFour = new ConnectFour(6, 7);

  function selectColumn(newColumn: number) {
    setColumn(newColumn);
  }

  useEffect(() => {
    connectFour.placePiece(column);
  }, [column]);

  function startNewGame() {
    console.log("STARTING NEW GAME!");
    connectFour.startNewGame();
    console.log("NEW GAME STARTED!");
  }

  // const columnContext = createContext(column);

  connectFour.placePiece(0);
  connectFour.placePiece(1);
  connectFour.placePiece(1);
  connectFour.placePiece(1);
  connectFour.placePiece(1);
  connectFour.placePiece(2);
  connectFour.placePiece(1);
  connectFour.placePiece(2);
  connectFour.placePiece(1);
  connectFour.placePiece(2);
  connectFour.placePiece(1);
  connectFour.placePiece(0);
  connectFour.placePiece(3);
  connectFour.placePiece(0);
  // newGame.placePiece(3);
  // newGame.placePiece(4);
  // newGame.placePiece(4);
  // newGame.placePiece(5);
  // newGame.placePiece(5);
  // newGame.placePiece(5);
  // connectFour.startNewGame();

  // Adding in new piece functionality
  // Listen for click event
  // On click get grid column number
  // Pass column number to placePiece function

  return (
    <div className="app-wrapper">
      <h1 className="title">Connect Four!</h1>
      <GameBoard currentGameBoard={connectFour.board} />
      <button
        className="newgame-btn"
        onClick={() => {
          startNewGame();
        }}
      >
        Start New Game
      </button>
    </div>
  );
}

export default App;
