import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const GameBoard: React.FC<any> = (props) => {
  const [gameState, setGameState] = useState({
    players: 0,
    points: 0,
    highestWins: true,
  });
  const setPlayers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameState(
      Object.assign({}, gameState, { players: e.currentTarget.value })
    );
  };
  const setPoints = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameState(
      Object.assign({}, gameState, { points: e.currentTarget.value })
    );
  };
  const setWinning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameState(
      Object.assign({}, gameState, { highestWins: e.currentTarget.checked })
    );
  };
  const handleClose = () => {
    props.close();
  };
  const handleCreateGame = () => {
    props.createGame(
      gameState.players,
      gameState.points,
      gameState.highestWins
    );
  };
  return (
    <Modal centered show={props.show}>
      <Modal.Header>
        <Modal.Title>New Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label htmlFor="playersCount">Players Count:</label>
          <input
            type="number"
            id="playersCount"
            defaultValue={0}
            onChange={setPlayers}
          />
          <br></br>
          <label htmlFor="points">Points:</label>
          <input
            type="number"
            id="points"
            defaultValue={0}
            onChange={setPoints}
          />
          <br></br>
          <label htmlFor="winning">Highest Points Wins:</label>
          <input
            type="checkbox"
            id="winning"
            defaultChecked={true}
            onChange={setWinning}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCreateGame}>
          OK
        </Button>
        <Button variant="secondary">Reset</Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameBoard;
