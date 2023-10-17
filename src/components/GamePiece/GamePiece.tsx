import "./GamePiece.css";

import { useContext } from "react";
import { GameContext } from "../../App";

type PieceProps = {
  playerNumber: number;
  column: number;
};

export default function (props?: PieceProps) {
  const boardGameInfo = useContext(GameContext);

  //Beginning functionality for handling creation of a new piece
  function handleClick() {
    if (
      props?.playerNumber != 1 &&
      props?.playerNumber != 2 &&
      boardGameInfo?.selectColumn
    ) {
      // To-do: Add logic for adding piece to selected column
      boardGameInfo.selectColumn(props?.column);
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
