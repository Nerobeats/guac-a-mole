import { SET_SIZE } from "./actionTypes";
export const setSize = size => {
  return {
    type: SET_SIZE,
    payload: size
  };
};
