import { combineReducers } from "redux";
import activityReducer from "./activity";
import nameReducer from "./name";
import catReducer from "./catReducer";

export default combineReducers({
  cats: catReducer,
});
