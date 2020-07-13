import React from "react";
import "./App.css";
import NewGame from "./components/NewGame";
import ScoreBoard from "./components/ScoreBoard";
import IAppState from "./redux/IAppState";
import { connect } from "react-redux";

const App: React.FC<any> = (props) => {
  return (
    <div className="scorekeepr">
      <h1> Score-Keeper</h1>
      <hr></hr>
      {props.gameStarted ? <ScoreBoard /> : <NewGame />}
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    gameStarted: state.gameStarted,
  };
};

export default connect(mapStateToProps)(App);
