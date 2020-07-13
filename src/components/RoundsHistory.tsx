import React from "react";
import IAppState from "../redux/IAppState";
import { connect } from "react-redux";

const RoundsHistory: React.FC = () => {
  return (
    <div className="round">
      <h4> Round 1</h4>
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
};
const mapStateToProps = (state: IAppState) => {
  return {
    players: state.players,
  };
};
export default connect(mapStateToProps)(RoundsHistory);
