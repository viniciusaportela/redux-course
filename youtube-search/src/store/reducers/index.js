import searchVideoReducer from "./search-video";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchVideo: searchVideoReducer,
});

export default rootReducer;
