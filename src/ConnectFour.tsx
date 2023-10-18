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
    console.log("BLANK BOARD CREATED: ", this.board);
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
    // console.log("here is the board: ", this.board);
    if (this.checkForWin()) {
      return;
    }

    //Error handling

    // console.log(`Placing piece in row: ${rowNumber}`);
    this.board[rowNumber].push(this.player);

    //Switching who the player is
    this.player === 1 ? (this.player = 2) : (this.player = 1);
    // console.log("This is the board with the new piece:", this.board);
    // console.log(`Its now player number ${this.player}'s turn!`);
  }

  checkForWin() {
    //Checking vertical

    // console.log(`CHECKING VERITCALS TO SEE IF PLAYER ${this.player} HAS WON`);
    for (let i = 0; i < this.board.length; i++) {
      // console.log(`CHECKING COLUMN NUMBER: ${i}`);
      let count = 0;

      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === this.player) {
          count++;
        } else {
          count = 0;
        }
        // console.log("count is now", count);
        if (count === 4) {
          console.log("GANE OVER!");
          console.log(`PLAYER ${this.player} IS THE WINNER!`);
          return true;
        }
      }
    }

    //Check Horizontals

    // console.log(`CHECKING HORIZONTALS TO SEE IF PLAYER ${this.player} HAS WON`);

    for (let i = 0; i < this.height; i++) {
      let count = 0;
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[j][i] === this.player) {
          count++;
        } else {
          count = 0;
        }

        // console.log("count is now", count);
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
