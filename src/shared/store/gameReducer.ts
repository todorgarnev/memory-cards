import { IGameStore } from "../interfaces/IGameStore";

const Reducer = (state: IGameStore, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case 'SET_BACKGROUND_TYPE':
      return {
        ...state,
        settings: {
          ...state.settings,
          backgroundType: action.payload
        }
      };
    case 'SET_GAME_SIZE':
      return {
        ...state,
        settings: {
          ...state.settings,
          gameSize: action.payload
        }
      };
    case 'SET_ANIMATION_TYPE':
      return {
        ...state,
        settings: {
          ...state.settings,
          animationType: action.payload
        }
      };
    case 'INCREASE_MOVES_COUNTER':
      return {
        ...state,
        settings: {
          ...state.settings,
          movesCounter: state.game.movesCounter + 1
        }
      };
    case 'RESET_MOVES_COUNTER':
      return {
        ...state,
        game: {
          ...state.game,
          movesCounter: 0
        }
      };
    case 'SET_GAME_STARTED':
      return {
        ...state,
        game: {
          ...state.game,
          started: action.payload
        }
      };
    default:
      return state;
  }
};

export default Reducer;
