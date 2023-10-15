import { render } from "react-dom";
import GamePiece from "../GamePiece/GamePiece";
import "./GameBoard.css";

type GameBoardProps = {
  currentGameBoard: number[][];
};

export default function GameBoard(gameboard: GameBoardProps) {
  const fakeGame = [
    [1],
    [2, 1, 1, 2],
    [2, 1, 1],
    [1, 2, 1],
    [2, 1, 1, 1],
    [2],
    [2, 2, 1, 1, 1, 1],
  ];

  function createBoard() {
    let renderedBoard: any = []; // need to fix the TypeScript on this...

    // for (let i = 0; i < fakeGame.length; i++) {
    //   console.log(fakeGame[i]);
    //   const column = [];
    //   for (let j = 0; j < 6; j++) {
    //     if (fakeGame[i][j]) {
    //       column.push(<GamePiece playerNumber={fakeGame[i][j]} />);
    //     } else if (!fakeGame[i][j]) {
    //       column.push(<GamePiece playerNumber={3} />);
    //     }
    //   }
    //   renderedBoard.push(column);
    // }

    for (let j = 6; j > 0; j--) {
      // let row = [];
      for (let i = 0; i < 7; i++) {
        if (fakeGame[i][j]) {
          console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(<GamePiece playerNumber={fakeGame[i][j]} />);
        } else {
          console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(<GamePiece playerNumber={3} />);
        }
      }
      // renderedBoard.push(row);
    }

    console.log(renderedBoard);
    return renderedBoard;
  }

  const newBoard = createBoard();
  return <div className="game-board">{newBoard}</div>;
}
