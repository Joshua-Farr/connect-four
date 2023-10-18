import "./App.css";
import GameBoard from "./components/GameBoard/Gameboard";
import ConnectFour from "./ConnectFour";
import { useState, createContext, useRef } from "react";

type BoardGameContext = {
  selectColumn: (newColumn: number) => void;
  columnSelected: number;
};

export const GameContext = createContext<BoardGameContext | undefined>(
  undefined
);

function App() {
  const [columnSelected, setColumnSelected] = useState(0);

  const [boardState, setBoardState] = useState<Array<Array<number>>>([]);

  const connectFourRef = useRef(new ConnectFour(6, 7));

  function selectColumn(newColumn: number | undefined) {
    if (newColumn || newColumn === 0) {
      connectFourRef.current.placePiece(newColumn);
      setBoardState(connectFourRef.current.board);
      if (newColumn === 0) {
        setColumnSelected((initial) => initial + 10);
      } else {
        setColumnSelected((initial) => initial + newColumn);
      }
    }
  }

  function startNewGame() {
    connectFourRef.current.startNewGame();
    setBoardState(connectFourRef.current.board);
  }

  return (
    <div className="app-wrapper">
      <h1 className="title">Connect Four!</h1>

      <GameContext.Provider value={{ selectColumn, columnSelected }}>
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
