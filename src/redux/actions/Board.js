import { GET_SCORE, SET_SETTINGS } from "./actionTypes";
export const setSettings = (speed, size) => {
  return {
    type: SET_SETTINGS,
    payload: {
      speed: speed,
      size: size
    }
  };
};

export const getScore = score => {
  return {
    type: GET_SCORE,
    payload: score
  };
};
