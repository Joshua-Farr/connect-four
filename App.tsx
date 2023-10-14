import "./App.css";
import ConnectFour from "./ConnectFour";

function App() {
  const newGame = new ConnectFour(6, 7);
  newGame.placePiece(0);
  newGame.placePiece(1);
  newGame.placePiece(1);
  newGame.placePiece(1);
  newGame.placePiece(1);
  newGame.placePiece(2);
  newGame.placePiece(1);
  newGame.placePiece(2);
  newGame.placePiece(1);
  newGame.placePiece(2);
  newGame.placePiece(1);
  newGame.placePiece(4);

  newGame.placePiece(2);

  return <h1> Connect Four!</h1>;
}

export default App;
