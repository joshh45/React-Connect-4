import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>
      <h1> oh yeah </h1>
      <h1> Player homeboy {this.props.player2} </h1>
      </div>
    );
  }
}


export default Board;
