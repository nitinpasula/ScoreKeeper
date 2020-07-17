import React from "react";
import IAppState from "../../redux/IAppState";
import { connect } from "react-redux";
import { removePlayer } from "../../redux/actions";
import "./ListPlayers.css";

const ListPlayers: React.FC<any> = (props: any) => {
  const handleRemovePlayer = (playerName: string) => {
    props.doRemovePlayer(playerName);
  };

  const players = props.players.map((player: any) => (
    <li key={player.name}>
      <div className="player">
        <div className="playerName"> {player.name}</div>
        <button
          id="addPlayerButton"
          onClick={() => {
            handleRemovePlayer(player.name);
          }}
        >
          x
        </button>
      </div>
    </li>
  ));
  return <ul className="players-list">{players}</ul>;
};

const mapStateToProps = (state: IAppState) => {
  return {
    players: state.players,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    doRemovePlayer: (playerName: string) => {
      dispatch(removePlayer(playerName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayers);
