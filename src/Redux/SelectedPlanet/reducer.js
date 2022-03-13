import { SELECT_PLANET } from "./actionTypes";

const init = {
  data: [],
};
export const planetReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SELECT_PLANET:
      return {
        cartdata: payload,
      };
   
    default:
      return state;
  }
};
