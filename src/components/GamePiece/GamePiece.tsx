import "./GamePiece.css";

type PieceProps = {
  playerNumber: number;
  column: number;
};

export default function (props?: PieceProps) {
  return <div className={`game-piece player-${props?.playerNumber}`}></div>;
}
