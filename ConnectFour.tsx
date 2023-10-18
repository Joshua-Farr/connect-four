export default class ConnectFour {
  height: number;
  width: number;
  board: any[];
  player: number;
  gameOver: boolean;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.board = new Array(width).fill([]).map(() => []);
    this.player = 1;
    this.gameOver = false;
  }

  placePiece(rowNumber: number) {
    if (rowNumber > this.width) {
      throw new Error("Cannot play a piece outside of the board!");
    } else if (this.checkForWin()) {
      throw new Error("Game has already concluded!");
    } else if (this.board[rowNumber].length === this.height) {
      console.log("This column is already full!");
      return;
    }

    console.log(`Placing piece in row: ${rowNumber}`);
    this.board[rowNumber].push(this.player);

    this.checkForWin();
    this.player === 1 ? (this.player = 2) : (this.player = 1);
  }

  checkForWin() {
    //Checking vertical

    let count = 0;
    for (let j = 0; j < this.board[1].length - 4; j++) {
      if (this.board[1][j] === this.player) {
        count++;
      } else {
        count = 0;
      }
    }

    if (count === 4) {
      console.log("Game is over!");
      console.log(`Player ${this.player} is the winner!`);
      return true;
    }

    //Check Horizontals

    //Check Diagonals

    return false;
  }
}
