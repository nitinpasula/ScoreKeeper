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
      {player.name}{" "}
      <button
        onClick={() => {
          handleRemovePlayer(player.name);
        }}
      >
        x
      </button>
    </li>
  ));
  return (
    <div className="players-list">
      <ul>{players}</ul>
    </div>
  );
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