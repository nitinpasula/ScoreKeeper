import React from "react";
import IAppState from "../redux/IAppState";
import { connect } from "react-redux";
import Player from "../model/Player";

const RoundsHistory: React.FC<any> = (props: any) => {
  const displayHistory = props.players.map((player: Player) => {
    return (
      <div className="round">
        <h4> Round </h4>
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <strong>Nitin Pasula</strong>
              </td>
              <td>75</td>
            </tr>
            <tr>
              <td>
                {" "}
                <strong>Akhila Eppa</strong>
              </td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                {" "}
                <strong>Nikhil Pasula</strong>
              </td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
  return displayHistory;
};
const mapStateToProps = (state: IAppState) => {
  return {
    players: state.players,
    rounds: state.gameRound - 1,
  };
};
export default connect(mapStateToProps)(RoundsHistory);
