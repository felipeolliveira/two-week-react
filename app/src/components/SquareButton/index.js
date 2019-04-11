import React, { Component } from "react";

import "./style.css"


class SquareButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: ""
    }
  }

  toggleChoise = () => {
    this.setState({
      player: (this.state.player === "X" ? "O" : "X")
    })
  }
  
  render() {
    return <button onClick={this.toggleChoise} className="square-button">{this.state.player}</button>
  }
}

export default SquareButton;