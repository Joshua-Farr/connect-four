import { render } from "react-dom";
import GamePiece from "../GamePiece/GamePiece";
import "./GameBoard.css";

type GameBoardProps = {
  currentGameBoard: number[][];
};

export default function GameBoard(gameboard: GameBoardProps) {
  // const fakeGame = [
  //   [1],
  //   [2, 1, 1, 2],
  //   [2, 1, 1],
  //   [1, 2, 1],
  //   [2, 1, 1, 1],
  //   [2],
  //   [2, 2, 1, 1, 1, 1],
  // ];

  function createBoard() {
    let renderedBoard: any = []; // need to fix the TypeScript on this...

    for (let j = 5; j >= 0; j--) {
      for (let i = 0; i < 7; i++) {
        if (gameboard.currentGameBoard[i][j]) {
          console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(
            <GamePiece
              playerNumber={gameboard.currentGameBoard[i][j]}
              column={i}
            />
          );
        } else {
          console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(<GamePiece playerNumber={3} column={i} />);
        }
      }
    }

    // console.log(renderedBoard);
    return renderedBoard;
  }

  const newBoard = createBoard();
  return <div className="game-board">{newBoard}</div>;
}
