import { combineReducers } from "redux";
import { dataReducer } from "./datareducer";

export const rootReducer = combineReducers({
  data: dataReducer
});
