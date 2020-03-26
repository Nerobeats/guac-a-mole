import { GET_SCORE, SET_SETTINGS } from "../actions";

const initialState = { score: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        speed: action.payload.speed,
        size: action.payload.size
      };
    case GET_SCORE:
      return {
        ...state,
        score: action.payload + state.score
      };
    default:
      return state;
  }
};

export default reducer;
