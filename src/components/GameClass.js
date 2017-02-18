class GameClass {
  constructor() {
    this.board = this.createBoard();
    this.player1 = 1;
    this.player2 = 2;
    this.currentPlayer = 1;
    this.gameOver = false;
    this.togglePlayer = this.togglePlayer;
  }


// setup game board
  createBoard() {
    let board = [];
    for(let r = 0; r < 6; r++){
      let row = [];
      for (let c = 0; c < 7; c++){
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

// place game piece
  setPiece(c) {
    if(this.gameOver !== true ){
      for(let r = 5; r >= 0; r--) {
        if(this.board[r][c] == null) {
          this.board[r][c] = this.currentPlayer;
          break;
        }
      }
    }
    this.togglePlayer();
    return this.board;
  }

// change players
  togglePlayer() {
    if (this.currentPlayer == 1){
      this.currentPlayer = 2;
    }
    else this.currentPlayer = 1;
  }

// reset the board
  resetBoard() {
    this.board = this.createBoard();
    this.currentPlayer = 1;
  }
}


let board = new GameClass();
console.log(board.setPiece(2));
console.log(board.setPiece(2));
console.log(board.setPiece(3));
console.log(board.setPiece(4));
console.log(board.setPiece(5));
console.log(board.setPiece(0));
console.log(board);
