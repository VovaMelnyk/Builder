import { CLEAR_RESUME } from "../../constants";

const initialState = [
  {
    language: "Ukrainian",
    level: "native",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LANGUAGE":
      return [...state, action.payload];
    case "DELETE_LANGUAGE":
      const newStateDelete = state.slice();
      newStateDelete.splice(action.payload, 1);
      return newStateDelete;
    case "UPDATE_LANGUAGE":
      const newStateSet = state.slice();
      newStateSet.splice(action.payload.index, 1, action.payload.editLanguage);
      return newStateSet;
    case CLEAR_RESUME:
      return initialState;
    default:
      return state;
  }
};
