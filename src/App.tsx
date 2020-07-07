import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Player from "./model/Player";

const defaultState = {
  newGame: false,
  players: [],
  points: 0,
  highestWins: true,
  gameWon: false,
};

function App() {
  const [state, setState] = useState(defaultState);
  const handleNewGame = () => {
    setState(Object.assign({}, defaultState, { newGame: true }));
  };
  const handleClose = () => {
    setState(Object.assign({}, state, { newGame: false }));
  };
  const handleOk = (
    players: Player[],
    points: number,
    highestWins: boolean = true
  ) => {
    setState(
      Object.assign({}, state, {
        newGame: false,
        players: players,
        points: points,
        highestWins: highestWins,
      })
    );
  };
  return (
    <Container fluid>
      <Header startNewGame={handleNewGame} />
      <GameBoard
        show={state.newGame}
        close={handleClose}
        createGame={handleOk}
      />
      <p>
        No. of Players : {state.players.length} <br></br>
        Points: {state.points}
        <br></br>
        Highest Wins: {state.highestWins ? "yes" : "no"}
      </p>
      <ScoreBoard players={state.players} winningPoints={state.points} />
    </Container>
  );
}

export default App;
