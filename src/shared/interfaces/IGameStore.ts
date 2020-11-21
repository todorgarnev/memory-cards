import { AnimationType } from "../enums/animationType";
import { CardBackgroundType } from "../enums/cardBackgroundType";
import { GameSize } from "../enums/gameSize";

export interface IGameStore {
  game: {
    started: boolean;
    movesCounter: number;
  };
  settings: {
    backgroundType: CardBackgroundType;
    gameSize: GameSize;
    animationType: AnimationType;
  };
}