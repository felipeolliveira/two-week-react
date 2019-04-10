import React from "react";

import "./style/reset.css"
import "./style/base.css"

import BoardSquare from "./components/BoardSquare";
import GameWrapper from "./components/GameWrapper";
import GameTitle from "./components/GameTitle";

const App = () => (
  <GameWrapper>
    <GameTitle />
    <BoardSquare />
  </GameWrapper>
);

export default App;