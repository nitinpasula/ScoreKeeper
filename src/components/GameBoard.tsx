import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Player from "../model/Player";

const GameBoard: React.FC<any> = (props) => {
  const [newGameState, setNewGameState] = useState({
    points: 100,
    players: [],
  });
  const handlePointsChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGameState(
      Object.assign({}, newGameState, { points: event.currentTarget.value })
    );
  };
  const removePlayer = () => {
    console.log(" To be implemented: To remove a Player");
  };
  const playersList = newGameState.players.map((player: Player) => (
    <li key={player.name}>
      {player.name} <Button onClick={removePlayer}>X</Button>
    </li>
  ));

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let keyPressed = event.keyCode;
    if (keyPressed === 13) {
      let inputValue = event.currentTarget.value;
      let newPlayer = {
        name: inputValue,
        score: 0,
        isWinner: false,
      };
      setNewGameState(
        Object.assign({}, newGameState, {
          players: [...newGameState.players, newPlayer],
        })
      );
      event.currentTarget.value = "";
    }
  };

  const addPlayer = () => {
    let playerName = (document.getElementById(
      "playerName"
    ) as HTMLInputElement).value.trim();

    let newPlayer = {
      name: playerName,
      score: 0,
      isWinner: false,
    };
    console.log("To be implemented: to not push duplicate players");
    setNewGameState(
      Object.assign({}, newGameState, {
        players: [...newGameState.players, newPlayer],
      })
    );
  };

  const handleOKClicked = () => {
    props.createGame(newGameState.players, newGameState.points);
    setNewGameState({
      points: 100,
      players: [],
    });
  };
  return (
    <Modal centered show={props.show}>
      <Modal.Header>
        <Modal.Title>New Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="points">Points:</label>
        <input
          type="number"
          defaultValue={newGameState.points}
          placeholder="Points to Win"
          onChange={handlePointsChanged}
        />{" "}
        <br></br>
        <label htmlFor="playerName">Player Name:</label>
        <input
          id="playerName"
          placeholder="Enter Player Name"
          onKeyUp={handleKeyUp}
        ></input>
        <Button onClick={addPlayer}>Add Player</Button>
        <ul>{playersList}</ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleOKClicked}>
          OK
        </Button>
        <Button variant="secondary">Reset</Button>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameBoard;
