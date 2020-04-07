import { ACTION_EAT, ACTION_PLAY, ACTION_NAP } from "../actionTypes";

const initialState = {
  activity: "napping",
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAP:
      return { ...state, activity: "napping" };
    case ACTION_EAT:
      return { ...state, activity: "Eating." };
    case ACTION_PLAY:
      return { ...state, activity: "Playing" };
    default:
      return state;
  }
};

export default activityReducer;
