import React from "react";

import "./style/reset.css"
import "./style/base.css"

import BoardSquare from "./components/BoardSquare";
import GameWrapper from "./components/GameWrapper";
import GameTitle from "./components/GameTitle";
import NextPlayer from "./components/NextPlayer";

const App = () => (
  <GameWrapper>
    <GameTitle />
    <BoardSquare squads="9" />
    <NextPlayer />
  </GameWrapper>
);

export default App;