import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Player: React.FC<any> = (props: any) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [winner, setWinner] = useState(false);
  const increase = () => {
    let newScore = playerScore + 1;
    if (parseInt(props.winningPoints) === newScore) {
      setWinner(true);
    }
    setPlayerScore(newScore);
  };
  const decrease = () => {
    let newScore = playerScore - 1;
    if (newScore < 0) {
      newScore = 0;
    }
    setPlayerScore(newScore);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.winningPoints === e.currentTarget.value) {
      setWinner(true);
    }
    setPlayerScore(parseInt(e.currentTarget.value));
  };
  return (
    <div>
      <label>
        <strong>{props.name}</strong>
      </label>
      <Button onClick={decrease}>-</Button>
      <span></span>
      <input type="number" value={playerScore} onChange={handleChange}></input>
      <span></span>
      <Button onClick={increase}>+</Button>
      {winner && <h1> Winner!!!, Game Over</h1>}
    </div>
  );
};
export default Player;
