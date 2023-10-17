import "./App.css";
import GameBoard from "./components/GameBoard/Gameboard";
import ConnectFour from "./ConnectFour";
import { useState, useEffect, createContext, useRef } from "react";

type BoardGameContext = {
  selectColumn: (newColumn: number) => void;
};

export const GameContext = createContext<BoardGameContext | undefined>(
  undefined
);

function App() {
  const [, setColumnSelected] = useState(0);

  const [boardState, setBoardState] = useState<Array<Array<number>>>([]);
  const connectFourRef = useRef<ConnectFour | null>(null);

  // Initialize ConnectFour when the component mounts
  useEffect(() => {
    connectFourRef.current = new ConnectFour(6, 7);
    setBoardState([connectFourRef.current.board]);
  }, []);

  const connectFour = new ConnectFour(6, 7);

  function selectColumn(newColumn: number | undefined) {
    if (newColumn || newColumn === 0) {
      connectFour.placePiece(newColumn);
      setColumnSelected(newColumn);
      setBoardState(connectFour.board);
    }
  }

  function startNewGame() {
    connectFour.startNewGame();
  }

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
