import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Button from "react-bootstrap/Button";
import { prependOnceListener } from "process";
import ScoreBoard from "./components/ScoreBoard";

const defaultState = {
  newGame: false,
  players: 0,
  points: 0,
  highestWins: true,
};

function App() {
  const [state, setState] = useState(defaultState);
  const handleNewGame = () => {
    setState(Object.assign({}, state, { newGame: true }));
  };
  const handleClose = () => {
    setState(Object.assign({}, state, { newGame: false }));
  };
  const handleOk = (players: number, points: number, highestWins: boolean) => {
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
      <ScoreBoard />
      <p>
        No. of Players : {state.players} <br></br>
        Points: {state.points}
        <br></br>
        Highest Wins: {state.highestWins ? "yes" : "no"}
      </p>
    </Container>
  );
}

export default App;
