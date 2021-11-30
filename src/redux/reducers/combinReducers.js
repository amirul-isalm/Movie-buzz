import { combineReducers } from "redux";
import { charectersReducer, movieDetailsReducer, pageNumberReducer, selectedCharectersReducer } from "./charecterReducer";
const reducers = combineReducers({
  allCharecters: charectersReducer,
  charecter: selectedCharectersReducer,
  movies: movieDetailsReducer,
  page: pageNumberReducer
});
export default reducers;
