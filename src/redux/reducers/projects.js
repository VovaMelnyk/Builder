import { ADD_PROJECT, SET_PROJECT, DELETE_PROJECT } from "../projects/types";
import { CLEAR_RESUME, UPDATE_RESUME } from "../../constants";

const initialState = [
  {
    projectTitle: "YouTube",
    company: "Google",
    description: "Bla bla bla bla",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload];
    case DELETE_PROJECT:
      const newStateDelete = state.slice();
      newStateDelete.splice(action.payload, 1);
      return newStateDelete;
    case SET_PROJECT:
      const newStateSet = state.slice();
      newStateSet.splice(action.payload.index, 1, action.payload.project);
      return newStateSet;
    case CLEAR_RESUME:
      return initialState;
    case UPDATE_RESUME:
      return action.payload.projects;
    default:
      return state;
  }
};
