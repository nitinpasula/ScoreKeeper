import React from "react";
import IAppState from "../redux/IAppState";
import { connect } from "react-redux";
import Player from "../model/Player";

const DisplayWinner: React.FC<any> = (props: any) => {
  const winners = props.winners.map((player: Player) => {
    return (
      <h1>
        {" "}
        {player.name} , Score - {player.scores[player.scores.length - 1]}
      </h1>
    );
  });
  return (
    <div className="winners">
      <h1> Game Over, Winners are</h1>
      {winners}
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    winners: state.winner,
  };
};
export default connect(mapStateToProps)(DisplayWinner);
