import React from "react";

import "./style.css"
import SquareButton from "./../SquareButton"


const squaresMultiplier = (number) => {
  const squares = Array(+number).fill();

  return squares.map((square, index) => <SquareButton key={index} />);
}

const BoardSquare = (props) => (
  <article className="board-square">
    {squaresMultiplier(props.squads)}
  </article>
)

export default BoardSquare; 