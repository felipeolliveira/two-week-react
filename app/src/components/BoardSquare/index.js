import React from "react";

import "./style.css"
import SquareButton from "./../SquareButton"

class BoardSquare extends React.Component {
  squaresMultiplier = () => {
    const squares = Array(9).fill();
  
    return squares.map((square, index) => {
      return <SquareButton key = {index} player = {this.props.player} onClick = {this.props.onClick}/>
    });
  }
  
  render() {
    return <article className="board-square">
    {this.squaresMultiplier()}
    </article>
  }
}

export default BoardSquare; 