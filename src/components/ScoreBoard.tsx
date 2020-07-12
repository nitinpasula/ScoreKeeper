import React from "react";
import ScoreBoardTitle from "./ScoreBoardTitle";

const ScoreBoard: React.FC = () => {
  return (
    <div className="scoreboard">
      <h2> Score Board</h2>
      <ScoreBoardTitle />
      <div className="scoring">
        <div className="round">
          <h4>Round in Progress ...</h4>
          <table>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <strong>Nitin Pasula</strong>
                </td>
                <td>
                  {" "}
                  <button>-</button>
                </td>
                <td>
                  {" "}
                  <input type="number" defaultValue="75"></input>{" "}
                </td>
                <td>
                  {" "}
                  <button>+</button>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <strong>Akhila Eppa</strong>
                </td>
                <td>
                  {" "}
                  <button>-</button>
                </td>
                <td>
                  {" "}
                  <input type="number" defaultValue="50"></input>{" "}
                </td>
                <td>
                  {" "}
                  <button>+</button>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <strong>Nikhil Pasula</strong>
                </td>
                <td>
                  {" "}
                  <button>-</button>
                </td>
                <td>
                  {" "}
                  <input type="number" defaultValue="45"></input>{" "}
                </td>
                <td>
                  {" "}
                  <button>+</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button">Next Round</button>
          <button type="button">Reset</button>
          <button type="button">Save</button>
        </div>
        <div className="round">
          <h4> Round 1</h4>
          <table>
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
          </table>
        </div>
      </div>
    </div>
  );
};
export default ScoreBoard;
