import { createStore, combineReducers } from "redux";
import { planetReducer } from "../reducer";

const rootReducer = combineReducers({
  planetState: planetReducer
});

export const store = createStore(rootReducer);
