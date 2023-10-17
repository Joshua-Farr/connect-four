import "./App.css";
import GameBoard from "./components/GameBoard/Gameboard";
import ConnectFour from "./ConnectFour";
import { useEffect, createContext } from "react";

type BoardGameContext = {
  // columnSelected: number;
  selectColumn: (newColumn: number) => void;
};

export const GameContext = createContext<BoardGameContext | undefined>(
  undefined
);

function App() {
  // const [columnSelected, setColumnSelected] = useState(0);

  const connectFour = new ConnectFour(6, 7);

  useEffect(() => {}, []);

  function selectColumn(newColumn: number | undefined) {
    if (newColumn) {
      // setColumnSelected(newColumn);
      connectFour.placePiece(newColumn);
    } else if (newColumn === 0) {
      connectFour.placePiece(newColumn);
    }
  }

  // useEffect(() => {
  //   connectFour.placePiece(columnSelected);
  // }, [columnSelected]);

  function startNewGame() {
    console.log("STARTING NEW GAME!");
    connectFour.startNewGame();
    console.log("NEW GAME STARTED!");
  }

  // const columnContext = createContext(column);
  // useEffect(() => {
  // connectFour.placePiece(0);
  // connectFour.placePiece(1);
  // connectFour.placePiece(1);
  // connectFour.placePiece(1);
  // connectFour.placePiece(1);
  // connectFour.placePiece(2);
  // connectFour.placePiece(1);
  // connectFour.placePiece(2);
  // connectFour.placePiece(1);
  // connectFour.placePiece(2);
  // connectFour.placePiece(1);
  // connectFour.placePiece(0);
  // connectFour.placePiece(3);
  // // }, []);
  // connectFour.placePiece(0);
  // connectFour.placePiece(3);
  // connectFour.placePiece(4);
  // connectFour.placePiece(4);
  // connectFour.placePiece(5);
  // connectFour.placePiece(5);
  // connectFour.placePiece(5);
  // connectFour.startNewGame();

  // Adding in new piece functionality
  // Listen for click event
  // On click get grid column number
  // Pass column number to placePiece function

  return (
    <div className="app-wrapper">
      <h1 className="title">Connect Four!</h1>

      <GameContext.Provider value={{ selectColumn }}>
        <GameBoard currentGameBoard={connectFour.board} />
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
