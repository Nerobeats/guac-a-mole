import { SET_SIZE, GET_SCORE } from "../actions";

const initialState = { size: 3, score: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIZE:
      return {
        ...state,
        size: action.payload
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
