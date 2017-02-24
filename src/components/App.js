import React, { Component } from 'react';
import Game from './Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
      boardState: null
    };
    this.gameOver = this.gameOver.bind(this);
  }

  updateBoard() {
    this.setState({ game: this.props.game });
  }

  gameOver() {
    if(this.props.game.gameOver == false) {
      return `Player ${this.props.game.currentPlayer} is currently moving`;
    }
    else {
      return `The winner is player ${this.props.game.currentPlayer}`;
    }
  }
    render(){


      return (
        <div>
          <h1> Connect 4 </h1>
          <h4> {this.gameOver()} </h4>
            <Game
             game={this.props.game}
             boardState={this.state.boardState}
             updateBoard={this.updateBoard.bind(this)}
            />
        </div>
      );
    }
}




export default App;
