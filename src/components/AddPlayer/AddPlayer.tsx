import React, { useState } from "react";
import Player from "../../model/Player";
import { connect } from "react-redux";
import { addPlayer } from "../../redux/actions";
import "./AddPlayer.css";
const AddPlayer: React.FC<any> = (props) => {
  const [valid, setValid] = useState(true);
  const capitalizeName = (name: string): string => {
    return name.trim()
      ? name
          .split(" ")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" ")
      : name.trim();
  };

  const handlePlayerNameChange = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      const playerName = capitalizeName(event.currentTarget.value);
      if (!playerName) {
        setValid(false);
        return;
      }
      const newPlayer: Player = {
        name: playerName,
        scores: [],
        isWinner: false,
      };
      props.doAddPlayer(newPlayer);
      event.currentTarget.value = "";
      setValid(true);
    }
  };
  const handleAddPlayer = () => {
    const inputElement = document.getElementById(
      "addplayer"
    ) as HTMLInputElement;
    const playerName = capitalizeName(inputElement.value);
    if (!playerName) {
      setValid(false);
      return;
    }
    const newPlayer: Player = {
      name: playerName,
      scores: [],
      isWinner: false,
    };
    props.doAddPlayer(newPlayer);
    inputElement.value = "";
    setValid(true);
  };
  return (
    <label htmlFor="addPlayer">
      Player Name:
      <input
        className={valid ? undefined : "empty-player"}
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
