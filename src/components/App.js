import React, { Component } from 'react';
import Board from './Board';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
    };
  }
    render(){
      return (
        <div>
          <h1> Connect 4 </h1>
            <Board
              player1= {this.state.player1}
              player2= {this.state.player2}
            />
        </div>
      );
    }
}




export default App;
