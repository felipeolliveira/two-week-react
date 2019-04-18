import React, { Component } from "react";

import "./style.css";
import GameTitle from "./../GameTitle";
import NextPlayer from "./../NextPlayer";
import BoardSquare from "./../BoardSquare";

class GameWrapper extends Component {
  state = {
    player: "O",
    nextPlayer: "X"
  }

  handletoggleChoise = () => {
    this.setState({
      player: (this.state.player === "X" ? "O" : "X" ),
      nextPlayer: (this.state.nextPlayer === "X" ? "O" : "X" )
    });
    console.log(this.state.nextPlayer, this.state.player, this)
  }
  
  render() {
    return <main className="game-wrapper">
      <GameTitle />
      <BoardSquare onClick = {this.handletoggleChoise} player = {this.state.player}/>
      <NextPlayer  nextPlayer={this.state.nextPlayer}/>
    </main>
  }
}

export default GameWrapper;