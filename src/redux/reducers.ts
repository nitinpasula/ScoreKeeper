import { START_GAME, CREATE_GAME } from "./actionTypes";
const initialState = {
  startNewGame: false,
  players: [],
  pointsToWin: 0,
  gameDone: false,
};

export default function scoreKeeper(state = initialState, action: any) {
  switch (action.type) {
    case START_GAME:
      return Object.assign({}, initialState, { startNewGame: true });
    case CREATE_GAME:
      return Object.assign({}, state, {
        players: action.game.Players,
        pointsToWin: action.game.pointsToWin,
      });
    default:
      return state;
  }
}
