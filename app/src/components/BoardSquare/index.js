import React from "react";

import "./style.css"
import SquareButton from "./../SquareButton"

const squaresMultiplier = (player, onClick) => {
  const squares = Array(9).fill();

  return squares.map((square, index) => {
    return <SquareButton key = {index} player = {player} onClick = {onClick}/>
  });
}

const BoardSquare = ({player, onClick}) => (
  <article className="board-square">
    {squaresMultiplier(player, onClick)}
  </article>
)

export default BoardSquare; 