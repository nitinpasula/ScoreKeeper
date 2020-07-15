import React from "react";
import "./App.css";
import NewGame from "./components/NewGame";
import ScoreBoard from "./components/ScoreBoard";
import IAppState from "./redux/IAppState";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC<any> = (props) => {
  return (
    <div className="scorekeeper">
      <Header />
      {props.gameStarted ? <ScoreBoard /> : <NewGame />}
      <Footer />
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    gameStarted: state.gameStarted,
  };
};

export default connect(mapStateToProps)(App);
