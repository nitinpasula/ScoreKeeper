import React from "react";

const NewGame: React.FC = () => {
  return (
    <div className="newgame">
      <h2> New Game </h2>
      <form>
        <label htmlFor="gamename">
          Game Name:
          <input
            id="gamename"
            type="text"
            placeholder="Enter a name for game"
          ></input>
        </label>
        <br></br>
        <label htmlFor="points">
          Points:
          <input
            id="points"
            type="number"
            placeholder="Enter game points"
            required
          ></input>
        </label>
        <br></br>
        <label htmlFor="gamestrategy">
          Game Strategy:
          <select id="gamestrategy" required>
            <option value="FTRW"> First To Reach Wins </option>
            <option value="LTRW"> Last To Reach Wins </option>
          </select>
        </label>
        <br></br>
        <label htmlFor="player">
          Player Name:
          <input id="player" type="text" placeholder="Enter player name" />
          <button id="addplayer" type="button">
            Add Player
          </button>
        </label>
        <br></br>
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};
export default NewGame;
