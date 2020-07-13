import React from "react";
import ScoreBoardTitle from "./ScoreBoardTitle";
import CurrentRound from "./CurrentRound";
import RoundsHistory from "./RoundsHistory";
import IAppState from "../redux/IAppState";
import { connect } from "react-redux";

const ScoreBoard: React.FC<any> = (props: any) => {
  return (
    <div className="scoreboard">
      <h2> Score Board</h2>
      <ScoreBoardTitle />

      <div className="scoring">
        <CurrentRound />
        <hr></hr>
        {props.showHistory ? <RoundsHistory /> : ""}
      </div>
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    showHistory: state.showHistory,
  };
};
export default connect(mapStateToProps)(ScoreBoard);
