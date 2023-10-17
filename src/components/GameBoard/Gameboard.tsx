import GamePiece from "../GamePiece/GamePiece";
import "./GameBoard.css";
import { useEffect } from "react";

type GameBoardProps = {
  currentGameBoard: number[][];
};

export default function GameBoard({ currentGameBoard }: GameBoardProps) {
  useEffect(() => {
    console.log("GameBoard props updated:", currentGameBoard);
  }, [currentGameBoard]);

  function createBoard() {
    let renderedBoard: any = []; // need to fix the TypeScript on this...

    for (let j = 5; j >= 0; j--) {
      for (let i = 0; i < 7; i++) {
        if (currentGameBoard[i][j]) {
          console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(
            <GamePiece
              playerNumber={currentGameBoard[i][j]}
              column={i}
              key={`piece-${i}-${j}`}
            />
          );
        } else {
          console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(<GamePiece playerNumber={3} column={i} />);
        }
      }
    }

    console.log(renderedBoard);
    return renderedBoard;
  }

  let newBoard = createBoard();
  return <div className="game-board">{newBoard}</div>;
}
