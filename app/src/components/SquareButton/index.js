import React from "react";

import "./style.css"

// class SquareButton extends React.Component {
//   state = {
//     content: "X"
//   }



//   handlePlayerContent(event) {
//     // console.log(this.props.onClick);

//     this.setState({
//       content: this.props.player
//     })

//     // this.props.onClick();

//   }

//   render() {
//     return <button className="square-button" onClick = {this.handlePlayerContent()}> {this.state.content} </button>
//   }
// }


const SquareButton = ({player, onClick}) => {
  return (
    <button className="square-button" onClick = {onClick}>{player}</button>
  )
}

export default SquareButton;