import React from "react";
import "./App.css";
import NewGame from "./components/NewGame/NewGame";
import ScoreBoard from "./components/ScoreBoard";
import IAppState from "./redux/IAppState";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC<any> = (props) => {
  return (
    <div className="scorekeeper">
      <Header />
      <div className="content">
        {props.gameStarted ? <ScoreBoard /> : <NewGame />}
      </div>
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
