import React from "react";
import "./App.css";
import NewGame from "./components/NewGame";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className="scorekeepr">
      <h1> Score-Keeper</h1>
      <NewGame></NewGame>
      <ScoreBoard></ScoreBoard>
    </div>
  );
}

export default App;
