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

    for (let i = 0; i < fakeGame.length; i++) {
      console.log(fakeGame[i]);

      for (let j = 0; j < 6; j++) {
        if (fakeGame[i][j] === 1) {
        }
      }
    }

    return renderedBoard;
  }

  const newBoard = createBoard();
  0;
  return (
    <div className="game-board">
      <h1>This is the gameboard!</h1>
      {newBoard}
      <GamePiece playerNumber={-1} />
    </div>
  );
}
