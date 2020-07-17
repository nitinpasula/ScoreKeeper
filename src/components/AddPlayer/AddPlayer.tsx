import React from "react";
import Player from "../../model/Player";
import { connect } from "react-redux";
import { addPlayer } from "../../redux/actions";

const AddPlayer: React.FC<any> = (props) => {
  const capitalizeName = (name: string): string => {
    return name
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  };

  const handlePlayerNameChange = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      const playerName = capitalizeName(event.currentTarget.value);
      const newPlayer: Player = {
        name: playerName,
        scores: [],
        isWinner: false,
      };
      props.doAddPlayer(newPlayer);
      event.currentTarget.value = "";
    }
  };
  const handleAddPlayer = () => {
    const inputElement = document.getElementById(
      "addplayer"
    ) as HTMLInputElement;
    const playerName = capitalizeName(inputElement.value);
    const newPlayer: Player = {
      name: playerName,
      scores: [],
      isWinner: false,
    };
    props.doAddPlayer(newPlayer);
    inputElement.value = "";
  };
  return (
    <label htmlFor="addPlayer">
      Player Name:
      <input
        id="addplayer"
        type="text"
        placeholder="Enter player name"
        onKeyUp={handlePlayerNameChange}
      />
      <button id="addplayerButton" type="button" onClick={handleAddPlayer}>
        Add Player
      </button>
    </label>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    doAddPlayer: (player: Player) => {
      dispatch(addPlayer(player));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddPlayer);
