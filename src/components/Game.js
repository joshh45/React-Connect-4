import React, { Component } from 'react';
import Space from './Space';

const Game = (props) => {
  let keyCount = -1;
  let board = props.game.board.map((row, x) => {
  let columns = row.map((column, y) => {
    keyCount = keyCount + 1;
      return(
        <Space
          key={keyCount}
          game={props.game}
          x={x}
          y={y}
        />
      );
    });
    return (
      <tr key={keyCount}>{columns}</tr>
    );
});


  return (
    <div>
      <table>
        <tbody>
        {board}
        </tbody>
      </table>
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
