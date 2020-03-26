import { SET_SIZE, GET_SCORE } from "./actionTypes";
export const setSize = size => {
  return {
    type: SET_SIZE,
    payload: size
  };
};

export const getScore = score => {
  return {
    type: GET_SCORE,
    payload: score
  };
};
