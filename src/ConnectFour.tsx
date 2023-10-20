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
    if (this.gameOver) {
      throw new Error("Game has already concluded!");
    }
    if (rowNumber >= this.width) {
      throw new Error("Cannot play a piece outside of the board!");
    } else if (this.board[rowNumber].length === this.height) {
      console.log("This column is already full!");
      return;
    }

    this.board[rowNumber].push(this.player);

    if (this.checkForWin()) {
      console.log(`${this.player} is the winner!!`);
      this.gameOver = true;
    } else {
      this.player === 1 ? (this.player = 2) : (this.player = 1);
    }
  }

  checkForWin() {
    console.log("CHECKING FOR THE WIN...");
    // console.log("Here is the board that we're checking: ", this.board);

    // Checking verticals
    // for (let i = 0; i < this.board.length; i++) {
    //   let count = 0;
    //   for (let j = 0; j < this.board[i].length; j++) {
    //     if (this.board[i][j] === this.player) {
    //       count++;
    //       console.log(
    //         `THE VERT COUNT IS: ${count} for player #${this.player}, count is starting at ${i}x${j}`
    //       );
    //     } else {
    //       count = 0;
    //     }
    //     if (count === 4) {
    //       console.log("GAME OVER!");
    //       console.log(`PLAYER ${this.player} IS THE WINNER!`);
    //       this.gameOver = true;

    //       return true;
    //     }
    //   }
    // }

    // // Check Horizontals

    // for (let i = 0; i < this.height; i++) {
    //   let count = 0;
    //   for (let j = 0; j < this.board.length; j++) {
    //     if (this.board[j][i] === this.player) {
    //       count++;
    //       console.log(
    //         `THE HOR COUNT IS: ${count} for player #${this.player}, count is starting at ${i}x${j}`
    //       );
    //     } else {
    //       count = 0;
    //     }
    //     if (count === 4) {
    //       console.log("GAME OVER!");
    //       console.log(`PLAYER ${this.player} IS THE WINNER!`);
    //       this.gameOver = true;

    //       return true;
    //     }
    //   }
    // }

    //Check Diagonals

    let count = 0;

    // for (let i = 0; i < this.width; i++) {
    //   count = 0;
    //   for (let x = 0; x < this.width; x++) {
    //     if (this.board[x][this.height - 1 - i - x] === this.player) {
    //       count++;
    //     } else {
    //       count = 0;
    //     }
    //     if (count === 4) {
    //       console.log("GAME OVER!");
    //       console.log(`PLAYER ${this.player} IS THE WINNER!`);
    //       this.gameOver = true;

    //       return true;
    //     }
    //   }
    // }

    // for (let i = 0; i < this.width; i++) {
    //   count = 0;
    //   for (let x = 1; x < this.width; x++) {
    //     if (this.board[this.width - x][this.height - x - i] === this.player) {
    //       count++;
    //     } else {
    //       count = 0;
    //     }
    //     if (count === 4) {
    //       console.log("GAME OVER!");
    //       console.log(`PLAYER ${this.player} IS THE WINNER!`);
    //       this.gameOver = true;

    //       return true;
    //     }
    //   }
    // }

    // for (let j = 0; j < this.width - 1; j++) {
    //   for (let x = 1; x < this.width; x++) {
    //     if (
    //       j + x < this.width &&
    //       this.board[x + j][this.height - x] === this.player
    //     ) {
    //       count++;
    //     } else {
    //       count = 0;
    //     }

    //     if (count === 4) {
    //       console.log("GAME OVER!");
    //       console.log(`PLAYER ${this.player} IS THE WINNER!`);
    //       this.gameOver = true;

    //       return true;
    //     }
    //   }
    // }

    //NOT WORKING
    // for (let j = 0; j < this.width - 1; j++) {
    //   for (let x = 2; x < this.width; x++) {
    //     if (
    //       j + x < this.width &&
    //       this.board[this.width - x - j][this.height - j] === this.player
    //     ) {
    //       count++;
    //     } else {
    //       count = 0;
    //     }

    //     if (count === 4) {
    //       console.log("GAME OVER!");
    //       console.log(`PLAYER ${this.player} IS THE WINNER!`);
    //       this.gameOver = true;

    //       return true;
    //     }
    //   }
    // }

    for (let j = 0; j < this.width; j++) {
      for (let x = 2; x < this.width; x++) {
        if (
          j + x < this.width &&
          this.board[this.width - x - j][this.height + 1 - x] === this.player
        ) {
          count++;
        } else {
          count = 0;
        }

        if (count === 4) {
          console.log("GAME OVER!");
          console.log(`PLAYER ${this.player} IS THE WINNER!`);
          this.gameOver = true;

          return true;
        }
      }
    }
  }
}
