import { START_GAME, CREATE_GAME } from "./actionTypes";
import { Game } from "../model/Game";
export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const createGame = (game: Game) => {
  return {
    type: CREATE_GAME,
    game,
  };
};
