import { AnimationType } from "../enums/animationType";
import { CardBackgroundType } from "../enums/cardBackgroundType";
import { GameSize } from "../enums/gameSize";

export interface ISettingsStore {
  backgroundType: CardBackgroundType;
  gameSize: GameSize;
  animationType: AnimationType;
}