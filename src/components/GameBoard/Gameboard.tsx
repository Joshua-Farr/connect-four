import GamePiece from "../GamePiece/GamePiece";
import "./GameBoard.css";

type GameBoardProps = {
  currentGameBoard: number[][];
};

export default function GameBoard({ currentGameBoard }: GameBoardProps) {
  function createBoard() {
    if (!currentGameBoard) {
      return;
    }

    let renderedBoard: JSX.Element[] = [];
    for (let j = 5; j >= 0; j--) {
      for (let i = 0; i < 7; i++) {
        if (currentGameBoard[i] && currentGameBoard[i][j] !== undefined) {
          // console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(
            <GamePiece
              playerNumber={currentGameBoard[i][j]}
              column={i}
              key={`piece-${i}-${j}`}
            />
          );
        } else {
          // console.log(`Generating piece for spot for Column: ${i} Row: ${j}`);
          renderedBoard.push(
            <GamePiece playerNumber={3} column={i} key={`piece-${i}-${j}`} />
          );
        }
      }
    }
    return renderedBoard;
  }

  let newBoard = createBoard();
  return <div className="game-board">{newBoard}</div>;
}
