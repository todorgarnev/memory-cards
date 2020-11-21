import React, { createContext, useReducer } from "react";
import { AnimationType } from "../enums/animationType";
import { CardBackgroundType } from "../enums/cardBackgroundType";
import { GameSize } from "../enums/gameSize";
import { IGameStore } from "../interfaces/IGameStore";
import Reducer from './gameReducer'


const initialState: IGameStore = {
  game: {
    started: false,
    movesCounter: 0,
  },
  settings: {
    backgroundType: CardBackgroundType.Numbers,
    gameSize: GameSize.Small,
    animationType: AnimationType.Rotate
  }
};

const Store = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState as any);
export default Store;
