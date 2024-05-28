import { combineReducers } from "redux";
import { affirmReducer } from "./affirmReducer";

export const rootReducer = combineReducers({
   affirmations: affirmReducer
})
