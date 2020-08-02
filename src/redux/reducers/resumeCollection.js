import {
  SAVE_COLLECTION_TO_DATABASE,
  GET_COLLECTION_FROM_DATABASE,
  DELETE_COLLECTION_FROM_DATABASE,
  UPDATE_COLLECTION_IN_DATABASE,
} from "../../constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTION_FROM_DATABASE:
      return action.payload;
    case SAVE_COLLECTION_TO_DATABASE:
      return [...state, action.payload];
    case DELETE_COLLECTION_FROM_DATABASE:
      return state.filter((collection) => collection.id !== action.payload);
    case UPDATE_COLLECTION_IN_DATABASE:
      return state.map((col) =>
        col.id === action.payload.id ? { ...col, ...action.payload.data } : col
      );
    default:
      return state;
  }
};
