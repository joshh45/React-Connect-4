class GameClass {
  constructor() {
    this.board = this.createBoard();
    this.player1 = 1;
    this.player2 = 2;
  }

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
}


const board = new GameClass()
console.log()
