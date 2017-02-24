import React, { Component } from 'react';

class Space extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    let placePiece = () => {
      if(this.props.game.setPiece(this.props.y)) {
        this.props.updateBoard();
      }
    };
    console.log(this.props.game.gameOver)
    return (
      <td>
        <div onClick={placePiece}>
          [{this.props.game.board[this.props.x][this.props.y]}]
        </div>
      </td>
    );
  }

}
//
export default Space;
