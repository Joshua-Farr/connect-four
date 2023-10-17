import "./App.css";
import GameBoard from "./components/GameBoard/Gameboard";
import ConnectFour from "./ConnectFour";
import { useState, useEffect, createContext } from "react";

type BoardGameContext = {
  selectColumn: (newColumn: number) => void;
};

export const GameContext = createContext<BoardGameContext | undefined>(
  undefined
);

function App() {
  const [columnSelected, setColumnSelected] = useState(0);

  const connectFour = new ConnectFour(6, 7);

  let boardState = connectFour.board;

  function selectColumn(newColumn: number | undefined) {
    if (newColumn || newColumn === 0) {
      connectFour.placePiece(newColumn);
      setColumnSelected(newColumn);
      boardState = connectFour.board;
    }
  }

  function startNewGame() {
    // console.log("STARTING NEW GAME!");
    connectFour.startNewGame();
    // console.log("NEW GAME STARTED!");
  }

  console.log("RENDERING....");
  connectFour.placePiece(0);

  return (
    <div className="app-wrapper">
      <h1 className="title">Connect Four!</h1>

      <GameContext.Provider value={{ selectColumn }}>
        <GameBoard currentGameBoard={boardState} />
      </GameContext.Provider>

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
