import { SET_SIZE } from "../actions";

const initialState = { size: 3 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIZE:
      return {
        ...state,
        size: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
