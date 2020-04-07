import { ADD_NAME } from "../actionTypes";

const initialState = {
  name: "Sean's Name",
};

export const nameReducer = (state = initialState, name) => {
  switch (name.type) {
    case ADD_NAME: {
      return { ...state, name: "new name" };
    }
    default:
      return state;
  }
};

export default nameReducer;
