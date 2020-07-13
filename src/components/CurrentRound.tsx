import React from "react";
import IAppState from "../redux/IAppState";
import Player from "../model/Player";
import { connect } from "react-redux";
import {
  nextRound,
  toggleShowHistory,
  setGameWinner,
  setGameOver,
} from "../redux/actions";

const CurrentRound: React.FC<any> = (props: any) => {
  const historyButton = props.showHistory ? "Hide History" : "Show History";
  const goToNextRound = () => {
    let winnerFound = false;
    props.players.forEach((player: Player) => {
      if (player.scores.length !== props.roundNumber) {
        if (player.scores[player.scores.length - 1]) {
          player.scores.push(player.scores[player.scores.length - 1]);
        } else {
          player.scores.push(0);
        }
      }
      if (player.isWinner) {
        winnerFound = true;
      }
    });
    props.doNextRound(props.players);
    if (winnerFound) {
      props.doSetGameOver();
    }
  };
  const displayPlayerScore = props.players.map((player: Player) => {
    const name = player.name;
    const currentScore =
      props.roundNumber === 1 ? 0 : player.scores[props.roundNumber - 2];
    const handlePointsUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.currentTarget.value);
      const score = parseInt(event.currentTarget.value);
      player.scores[props.roundNumber - 1] = score;
      if (score >= props.pointsToWin) {
        player.isWinner = true;
        props.doSetGameWinner(player);
      } else {
        player.isWinner = false;
      }
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

      <button type="button" onClick={() => props.doToggleShowHistory()}>
        {historyButton}
      </button>
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    players: state.players,
    roundNumber: state.gameRound,
    pointsToWin: state.points,
    showHistory: state.showHistory,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    doNextRound: (players: Player[]) => {
      dispatch(nextRound(players));
    },
    doToggleShowHistory: () => {
      dispatch(toggleShowHistory());
    },
    doSetGameWinner: (player: Player) => {
      dispatch(setGameWinner(player));
    },
    doSetGameOver: () => {
      dispatch(setGameOver());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentRound);
