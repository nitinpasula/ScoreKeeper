import React from "react";
import IAppState from "../redux/IAppState";
import { connect } from "react-redux";

const ListPlayers: React.FC<any> = (props: any) => {
  const players = props.players.map((player: any) => (
    <li key={player.name}>{player.name}</li>
  ));
  return <ul>{players}</ul>;
};

const mapStateToProps = (state: IAppState) => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(ListPlayers);
