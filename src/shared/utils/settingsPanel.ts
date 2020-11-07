import { AnimationType } from "../enums/animationType";
import { CardBackgroundType } from "../enums/cardBackgroundType";
import { GameSize } from "../enums/gameSize";
import { GroupType } from "../enums/groupType";
import { InputGroupName } from "../enums/inputGroupName";

const getGroupName = (groupType: GroupType): InputGroupName => {
  switch (groupType) {
    case GroupType.CardBackgroundType:
      return InputGroupName.cardBackground;
    case GroupType.GameSize:
      return InputGroupName.size;
    case GroupType.CardAnimation:
      return InputGroupName.animation;
  }
}

const getGroupSubType = (groupType: GroupType): any => {
  switch (groupType) {
    case GroupType.CardBackgroundType:
      return CardBackgroundType;
    case GroupType.GameSize:
      return GameSize;
    case GroupType.CardAnimation:
      return AnimationType;
  }
}

const getGroupSubTypeArray = (groupType: GroupType): string[] => {
  const arr: string[] = [];

  switch (groupType) {
    case GroupType.CardBackgroundType:
      for (const value in CardBackgroundType) {
        arr.push(value);
      }
      break;
    case GroupType.GameSize:
      for (const value in GameSize) {
        arr.push(value);
      }
      break;
    case GroupType.CardAnimation:
      for (const value in AnimationType) {
        arr.push(value);
      }
      break;
  }

  return arr;
}

export { getGroupName, getGroupSubType, getGroupSubTypeArray }