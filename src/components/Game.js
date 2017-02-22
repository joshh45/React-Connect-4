import React, { Component } from 'react';
import Space from './Space';

const Game = (props) => {
  let defaultBoard = [];
  let board = defaultBoard.push(props.game.board.map((thing, index) => (
   <p key={index}> [] </p>
 )));

  return (
    <div>
      {defaultBoard}
    </div>
  );
};


export default Game;


// class Game extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     };
//   }
//
//   render(){
//     let row, column;
//     let board = [];
//     for (row = 0; row < 6; row ++) {
//       for (column = 0; column < 7; column ++){
//         let key = row + "" + column;
//         board.push(
//           <Space
//           game={this.props.game}
//           color={this.props.game.board[row][column]}
//           row={row}
//           column={column}
//           key={key}
//           />
//         );
//       }
//     }
//     return(
//       <div>
//         {board}
//       </div>
//     );
//   }
// }
