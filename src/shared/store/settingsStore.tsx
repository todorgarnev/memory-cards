import React, { createContext, useReducer } from "react";
import { AnimationType } from "../enums/animationType";
import { CardBackgroundType } from "../enums/cardBackgroundType";
import { GameSize } from "../enums/gameSize";
import Reducer from './settingsReducer'


const initialState = {
  backgroundType: CardBackgroundType.Numbers,
  gameSize: GameSize.Small,
  animationType: AnimationType.Rotate
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
