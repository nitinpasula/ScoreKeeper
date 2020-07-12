import GameRound from "../model/GameRound";
import { GameStrategy } from "../model/GameStrategy";
import Player from "../model/Player";

interface IAppState {
  gameName: string;
  points: number;
  players: Player[];
  strategy: GameStrategy;
  gameStarted: boolean;
  winner: undefined | Player;
  rounds: undefined | GameRound[];
}
export default IAppState;
