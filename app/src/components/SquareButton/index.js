import React, { Component } from "react";

import "./style.css"


class SquareButton extends Component {
  state = {
    player: ""
  }

  handletoggleChoise = () => {
    this.setState(
      { player: (this.state.player === "X" ? "O" : "X") }
    )
  }
  
  render() {
    return <button onClick={this.handletoggleChoise} className="square-button">{this.state.player}</button>
  }
}

export default SquareButton;