class ConnectFour {
  height: number;
  width: number;
  board: number[];
  //   whichPlayer: number;

  constructor(height: number, width: number, board: number[]) {
    this.height = height;
    this.width = width;
    this.board = board;
    // this.whichPlayer = whichPlayer;
  }

  makeBoard() {
    console.log("Board is being made...");
    console.log(this.board);
  }
}

const newGame = new ConnectFour(1, 3, []);

newGame.makeBoard();
