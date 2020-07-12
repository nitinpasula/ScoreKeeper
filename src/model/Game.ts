import Player from "./Player";
import { GameStrategy } from "./GameStrategy";

export interface Game {
  name: string;
  players: Player[];
  points: number;
  strategy: GameStrategy;
}
