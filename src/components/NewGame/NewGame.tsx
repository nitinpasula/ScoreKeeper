import React from "react";
import { connect } from "react-redux";
import {
  startGame,
  setPoints,
  setGameName,
  setGameStrategy,
  resetGame,
} from "../../redux/actions";
import { GameStrategy } from "../../model/GameStrategy";
import IAppState from "../../redux/IAppState";
import AddPlayer from "../AddPlayer";
import ListPlayers from "../ListPlayers";
import "./NewGame.css";

const NewGame: React.FC<any> = (props: any) => {
  const handleGameNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.doSetGameName(event.currentTarget.value);
  };
  const handlePointsChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.doSetPoints(parseInt(event.currentTarget.value));
  };
  const handleStartGame = () => {
    props.doStartGame();
  };
  const handleGameStrategyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.doSetGameStrategy(event.currentTarget.value);
  };
  const handleResetGame = () => {
    props.doResetGame();
  };
  return (
    <div className="newgame">
      <div className="newgame-content">
        <div className="newgame-title">
          <h3> New Game </h3>
        </div>

        <label htmlFor="gamename">
          Game Name:
          <input
            id="gamename"
            type="text"
            placeholder="Enter a name for game"
            onChange={handleGameNameChange}
          ></input>
        </label>
        <label htmlFor="points">
          Points:
          <input
            id="points"
            type="number"
            placeholder="Enter game points"
            required
            onChange={handlePointsChanged}
          ></input>
        </label>
        <label htmlFor="gamestrategy">
          Game Strategy:
          <select
            id="gamestrategy"
            required
            onChange={handleGameStrategyChange}
          >
            <option value={GameStrategy.FTRW}> {GameStrategy.FTRW} </option>
            <option value={GameStrategy.LTRW}> {GameStrategy.LTRW} </option>
          </select>
        </label>
        <AddPlayer />
        <ListPlayers />
        <button type="button" onClick={handleStartGame}>
          Start Game
        </button>
        <button type="button" onClick={handleResetGame}>
          Reset
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    name: state.gameName,
    points: state.points,
    players: state.players,
    strategy: state.strategy,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    doStartGame: () => {
      dispatch(startGame());
    },
    doResetGame: () => {
      dispatch(resetGame());
    },
    doSetPoints: (points: number) => {
      dispatch(setPoints(points));
    },
    doSetGameName: (name: string) => {
      dispatch(setGameName(name));
    },
    doSetGameStrategy: (strategy: GameStrategy) => {
      dispatch(setGameStrategy(strategy));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
