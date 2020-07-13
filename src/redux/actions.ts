import {
  START_GAME,
  ADD_PLAYER,
  SET_GAME_NAME,
  SET_GAME_STRATEGY,
  SET_POINTS,
  RESET_GAME,
  REMOVE_PLAYER,
  NEXT_ROUND,
} from "./actionTypes";
import Player from "../model/Player";
import { GameStrategy } from "../model/GameStrategy";
export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const setGameName = (name: string) => {
  return {
    type: SET_GAME_NAME,
    name,
  };
};

export const setPoints = (points: number) => {
  return {
    type: SET_POINTS,
    points,
  };
};

export const setGameStrategy = (strategy: GameStrategy) => {
  return {
    type: SET_GAME_STRATEGY,
    strategy,
  };
};

export const addPlayer = (player: Player) => {
  return {
    type: ADD_PLAYER,
    player,
  };
};
export const removePlayer = (playerName: string) => {
  return {
    type: REMOVE_PLAYER,
    playerName,
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};

export const nextRound = (players: Player[]) => {
  return {
    type: NEXT_ROUND,
    players,
  };
};
