import React from "react";
import IAppState from "../redux/IAppState";
import Player from "../model/Player";
import { connect } from "react-redux";
import { nextRound } from "../redux/actions";

const CurrentRound: React.FC<any> = (props: any) => {
  const goToNextRound = () => {
    props.players.forEach((player: Player) => {
      if (player.scores.length !== props.roundNumber) {
        player.scores.push(0);
      }
    });
    props.doNextRound(props.players);
  };
  const displayPlayerScore = props.players.map((player: Player) => {
    const name = player.name;
    const currentScore =
      props.roundNumber === 1 ? 0 : player.scores[props.roundNumber - 1];
    const handlePointsUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.currentTarget.value);
      player.scores[props.roundNumber - 1] = parseInt(
        event.currentTarget.value
      );
    };
    return (
      <tr key={name}>
        <td>
          <strong>{name}</strong>
        </td>
        <td>
          <input
            type="number"
            defaultValue={currentScore}
            onChange={handlePointsUpdate}
          ></input>
        </td>
      </tr>
    );
  });
  return (
    <div className="round">
      <h4>Round {props.roundNumber} (in progress):</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>{displayPlayerScore}</tbody>
      </table>
      <button type="button" onClick={goToNextRound}>
        Next Round
      </button>
      <button type="button">Reset</button>
      <button type="button">Save</button>
      <button type="button">Show History</button>
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    players: state.players,
    roundNumber: state.gameRound,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    doNextRound: (players: Player[]) => {
      dispatch(nextRound(players));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentRound);
