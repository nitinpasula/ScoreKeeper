import React from "react";
import IAppState from "../redux/IAppState";
import { connect } from "react-redux";
import Player from "../model/Player";

const RoundsHistory: React.FC<any> = (props: any) => {
  const displayHistory: any = [];
  for (let i = props.rounds; i > 0; i--) {
    const playerScores = props.players.map((player: Player) => {
      return (
        <tr>
          <td>
            <strong>{player.name}</strong>
          </td>
          <td>{player.scores[i - 1]}</td>
        </tr>
      );
    });

    const roundDetails = (
      <div className="round">
        <h4> Round {i}</h4>
        <table>
          <tbody>{playerScores}</tbody>
        </table>
      </div>
    );
    displayHistory.push(roundDetails);
  }
  return <div className="history">{displayHistory}</div>;
};
const mapStateToProps = (state: IAppState) => {
  return {
    players: state.players,
    rounds: state.gameRound - 1,
  };
};
export default connect(mapStateToProps)(RoundsHistory);
