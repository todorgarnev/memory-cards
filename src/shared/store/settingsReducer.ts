const Reducer = (state: any, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case 'SET_BACKGROUND_TYPE':
      return {
        ...state,
        backgroundType: action.payload
      };
    case 'SET_GAME_SIZE':
      return {
        ...state,
        gameSize: action.payload
      };
    case 'SET_ANIMATION_TYPE':
      return {
        ...state,
        animationType: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
