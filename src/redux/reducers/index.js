import { combineReducers } from "redux";
import user from "./user";
import resumeCollection from "./resumeCollection";
import resume from "./resume";

const rootReducer = combineReducers({
  user,
  resumeCollection,
  resume,
});

export default rootReducer;
