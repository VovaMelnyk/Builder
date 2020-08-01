import { ADD_POSITION, DELETE_POSITION } from "../../constants";

const initialState = [
  {
    jobTitle: "Front end Developer",
    employer: "Google",
    start: "",
    end: "",
    city: "Kyiv",
    description: "Bla bla bla bla",
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POSITION:
      return [...state, payload];
    case DELETE_POSITION:
      const newState = [...state];
      newState.splice(payload, 1);

      return newState;
    default:
      return state;
  }
};
