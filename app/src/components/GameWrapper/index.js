import React from "react";

import "./style.css";
import GameTitle from "./../GameTitle";
import NextPlayer from "./../NextPlayer";
import BoardSquare from "./../BoardSquare";

class GameWrapper extends React.Component {
  state = {
    player: "O",
    nextPlayer: "X"
  }

  handleClick = (event) => {
    console.log(event.target)
    this.setState({
      player: (this.state.player === "X" ? "O" : "X" ),
      nextPlayer: (this.state.nextPlayer === "X" ? "O" : "X" )
    });
  }
  
  render() {
    return <main className="game-wrapper">
      <GameTitle />
      <BoardSquare player = {this.state.player} onClick = {this.handleClick}/>
      <NextPlayer  nextPlayer={this.state.nextPlayer}/>
    </main>
  }
}

export default GameWrapper;