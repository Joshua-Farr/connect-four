import "./GamePiece.css";

type PieceProps = {
  playerNumber: number;
  column: number;
};

export default function (props?: PieceProps) {
  //Beginning functionality for handling creation of a new piece
  function handleClick() {
    if (props?.playerNumber != 1 && props?.playerNumber != 2) {
      console.log(`I'm in column: ${props?.column}`);
      // To-do: Add logic for adding piece to selected column
      return true;
    } else {
      return false;
    }
  }

  return (
    <div
      className={`game-piece player-${props?.playerNumber}`}
      onClick={() => {
        handleClick();
      }}
    ></div>
  );
}
