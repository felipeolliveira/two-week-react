import React from "react";

import "./style.css"

const SquareButton = (props) => {
  return (
    <button className="square-button" onClick = {props.onClick}>{props.player}</button>
  )
}

export default SquareButton;