import React from "react";
import PlayerComponent from "./PlayerComponent";
import Player from "../model/Player";

const ScoreBoard: React.FC<any> = (props: any) => {
  const displayPlayers = props.players.map((player: Player) => (
    <PlayerComponent name={player.name} winningPoints={props.winningPoints} />
  ));

  return <div>{displayPlayers}</div>;
};
export default ScoreBoard;
