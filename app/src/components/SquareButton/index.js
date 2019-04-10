import React from "react";

import "./style.css"

const handleClick = texto => console.log(texto); 

const SquareButton = () => (
  <button 
    onClick={handleClick("Foi")}
    className="square-button">x</button>
)

export default SquareButton;