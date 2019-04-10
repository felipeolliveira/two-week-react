import React from "react";

import "./style.css"
import SquareButton from "./../SquareButton"


const squaresMultiplier = (number) => {
  const arrayComponents = [];
  let i = 0;
  
  for (i; i < number; i++) {
    const component = <SquareButton key={i}/>
    arrayComponents.push(component);
  }

  return arrayComponents;
}

const BoardSquare = () => (
  <article className="board-square">
    {squaresMultiplier(9)}
  </article>
)

export default BoardSquare; 