import React from "react";
import Player from "./Player";

const ScoreBoard: React.FC<any> = (props: any) => {
  const players = [];
  for (let i = 0; i < props.state.players; i++) {
    players.push(
      <Player name={`player ${i}`} winningPoints={props.state.points} />
    );
  }
  return <div>{players}</div>;
};
export default ScoreBoard;
