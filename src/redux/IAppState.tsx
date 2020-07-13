import GameRound from "../model/GameRound";
import { GameStrategy } from "../model/GameStrategy";
import Player from "../model/Player";

interface IAppState {
  gameName: string;
  points: number;
  players: Player[];
  strategy: GameStrategy;
  gameStarted: boolean;
  gameOver: boolean;
  winner: undefined | Player[];
  gameRound: number;
  showHistory: boolean;
}
export default IAppState;
