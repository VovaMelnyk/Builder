import {
  ADD_POSITION,
  DELETE_POSITION,
  CHANGE_DATA_POSITION,
  CHANGE_POSITION_START_DATE,
  CHANGE_POSITION_END_DATE,
} from "../../constants";
import moment from "moment";

const initialState = [
  {
    jobTitle: "Front end Developer",
    employer: "Google",
    start: moment()._d,
    end: moment()._d,
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
    case CHANGE_DATA_POSITION:
      return state.map((item, index) =>
        index === payload.index
          ? { ...item, [payload.target.name]: payload.target.value }
          : item
      );
    case CHANGE_POSITION_START_DATE:
      return state.map((item, index) =>
        index === payload.index ? { ...item, ...payload } : item
      );
    case CHANGE_POSITION_END_DATE:
      return state.map((item, index) =>
        index === payload.index ? { ...item, ...payload } : item
      );
    default:
      return state;
  }
};
