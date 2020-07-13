import {
  START_GAME,
  ADD_PLAYER,
  SET_GAME_NAME,
  SET_POINTS,
  SET_GAME_STRATEGY,
  RESET_GAME,
  REMOVE_PLAYER,
  NEXT_ROUND,
  TOGGLE_SHOW_HISTORY,
  SET_GAME_WINNER,
  SET_GAME_OVER,
} from "./actionTypes";
import IAppState from "./IAppState";
import { GameStrategy } from "../model/GameStrategy";
const initialState: IAppState = {
  gameName: "",
  points: 0,
  players: [],
  strategy: GameStrategy.FTRW,
  gameStarted: false,
  winner: undefined,
  gameRound: 1,
  showHistory: false,
  gameOver: false,
};

export default function scoreKeeper(
  state: IAppState = initialState,
  action: any
) {
  switch (action.type) {
    case START_GAME:
      return Object.assign({}, state, { gameStarted: true });
    case RESET_GAME:
      return Object.assign({}, initialState);
    case SET_GAME_NAME:
      return Object.assign({}, state, { gameName: action.name });
    case SET_POINTS:
      return Object.assign({}, state, { points: action.points });
    case SET_GAME_STRATEGY:
      return Object.assign({}, state, { strategy: action.strategy });
    case ADD_PLAYER:
      return Object.assign({}, state, {
        players: [...state.players, action.player],
      });
    case REMOVE_PLAYER:
      return Object.assign({}, state, {
        players: state.players.filter(
          (player) => player.name !== action.playerName
        ),
      });
    case NEXT_ROUND:
      return Object.assign({}, state, {
        gameRound: state.gameRound + 1,
        players: action.players,
      });
    case TOGGLE_SHOW_HISTORY:
      return Object.assign({}, state, { showHistory: !state.showHistory });
    case SET_GAME_WINNER:
      return Object.assign({}, state, {
        winner: state.winner
          ? [...state.winner, action.player]
          : [action.player],
      });
    case SET_GAME_OVER:
      return Object.assign({}, state, { gameOver: true });
    default:
      return state;
  }
}
