class GameClass {
  constructor() {
    this.board = this.createBoard();
    this.player1 = 1;
    this.player2 = 2;
    this.currentPlayer = 1;
    this.gameOver = false;
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
    else {
      this.currentPlayer = 1;
    }
  }

// reset the board
  resetBoard() {
    this.board = this.createBoard();
    this.currentPlayer = 1;
  }

// vertical check
  checkVertical() {
    for ( let r = 3; r < 6; r++) {
      for ( let c = 0; c < 7; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r - 1][c] &&
             this.board[r][c] === this.board[r - 2][c] &&
             this.board[r][c] === this.board[r - 3][c])
          {
            return this.board;
          }
        }
      }
    }
  }

  checkHorizontal(){
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r][c + 1] &&
              this.board[r][c] === this.board[r][c + 2] &&
              this.board[r][c] === this.board[r][c + 3])
          {
            return this.board;
          }
        }
      }
    }
  }

  checkDiagonalRight(){
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r - 1][c + 1] &&
              this.board[r][c] === this.board[r - 2][c + 2] &&
              this.board[r][c] === this.board[r - 3][c + 3])
          {
            return this.board;
          }
        }
      }
    }
  }

  checkDiagonalLeft(){
    for (let r = 3; r < 6; r++) {
      for (let c = 3; r < 7; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r - 1][c - 1] &&
              this.board[r][c] === this.board[r - 2][c - 2] &&
              this.board[r][c] === this.board[r - 3][c - 3])
          {
            return this.board;
          }
        }
      }
    }
  }


  checkAll(){
    return this.checkHorizontal() || this.checkVertical() || this.checkDiagonalRight() || this.checkDiagonalLeft();
  }
}



let board = new GameClass();
console.log(board.setPiece(0));
console.log(board.setPiece(0));
console.log(board.setPiece(0));
console.log(board.setPiece(0));
console.log(board.setPiece(1));
console.log(board.setPiece(6));
console.log(board.setPiece(1));
console.log(board.setPiece(1));
console.log(board.setPiece(2));
console.log(board.setPiece(2));
console.log(board.setPiece(6));
console.log(board.setPiece(3));





console.log("-------------");

console.log(board.checkAll());
