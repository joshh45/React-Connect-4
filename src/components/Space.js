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
    return (
      <td><div onClick={placePiece}> [{this.props.game.currentPlayer}] </div></td>
    );
  }

}
//
export default Space;
