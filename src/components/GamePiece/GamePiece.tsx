import "./GamePiece.css";

type PieceProps = {
  playerNumber: number;
};

export default function (player?: PieceProps) {
  return <div className={`game-piece player-${player?.playerNumber}`}></div>;
}
