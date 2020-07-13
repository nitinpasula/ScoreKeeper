import React from "react";
import ScoreBoardTitle from "./ScoreBoardTitle";
import CurrentRound from "./CurrentRound";
import RoundsHistory from "./RoundsHistory";

const ScoreBoard: React.FC = () => {
  return (
    <div className="scoreboard">
      <h2> Score Board</h2>
      <ScoreBoardTitle />

      <div className="scoring">
        <CurrentRound />
        <hr></hr>
        <RoundsHistory />
      </div>
    </div>
  );
};
export default ScoreBoard;
