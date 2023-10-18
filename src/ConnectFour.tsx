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

  startNewGame() {
    this.board = new Array(this.width).fill([]).map(() => []);
  }

  placePiece(rowNumber: number) {
    if (this.checkForWin()) {
      return;
    }

    if (rowNumber > this.width) {
      throw new Error("Cannot play a piece outside of the board!");
    } else if (this.checkForWin()) {
      throw new Error("Game has already concluded!");
    } else if (this.board[rowNumber].length === this.height) {
      console.log("This column is already full!");
      return;
    }

    this.board[rowNumber].push(this.player);

    this.player === 1 ? (this.player = 2) : (this.player = 1);
  }

  checkForWin() {
    //Checking vertical

    for (let i = 0; i < this.board.length; i++) {
      let count = 0;
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === this.player) {
          count++;
        } else {
          count = 0;
        }
        if (count === 4) {
          console.log("GANE OVER!");
          console.log(`PLAYER ${this.player} IS THE WINNER!`);
          return true;
        }
      }
    }

    //Check Horizontals

    for (let i = 0; i < this.height; i++) {
      let count = 0;
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[j][i] === this.player) {
          count++;
        } else {
          count = 0;
        }
        if (count === 4) {
          console.log("GANE OVER!");
          console.log(`PLAYER ${this.player} IS THE WINNER!`);
          return true;
        }
      }
    }

    //Check Diagonals

    return false;
  }
}
