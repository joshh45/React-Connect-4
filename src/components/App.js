import React, { Component } from 'react';
import Game from './Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game
    };
  }
    render(){
      return (
        <div>
          <h1> Connect 4 </h1>
          <h4> Player {this.props.game.currentPlayer} is moving </h4>
            <Game
             game={this.props.game}
            />
        </div>
      );
    }
}




export default App;
