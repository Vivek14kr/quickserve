import { SELECT_PLANET } from "./actionTypes";

export const selectPlanet = (data) => {
  return {
    type: SELECT_PLANET,
    payload: data,
  };
};
