import React from "react";

import "./style.css"
import SquareButton from "./../SquareButton"


const squaresMultiplier = (number, component) => {
  const arrayComponents = [];

  for (let i = 0; i < number; i++) {
    arrayComponents.push(component);
  }

  return arrayComponents;
}

const BoardSquare = () => (
  <article className="board-square">
    {squaresMultiplier(9, <SquareButton />)}
  </article>
)

export default BoardSquare; 