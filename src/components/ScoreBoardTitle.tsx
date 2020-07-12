import React from "react";
import IAppState from "../redux/IAppState";
import { connect } from "react-redux";
const ScoreBoardTitle: React.FC<any> = (props: any) => {
  return (
    <div className="scoreBoardTitle">
      <h3>
        Game Name: {props.gameName} , Points: {props.points} , Game Strategy:{" "}
        {props.strategy}, Number of Players: {props.count}
      </h3>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => {
  return {
    gameName: state.gameName,
    points: state.points,
    strategy: state.strategy,
    count: state.players.length,
  };
};

export default connect(mapStateToProps)(ScoreBoardTitle);
