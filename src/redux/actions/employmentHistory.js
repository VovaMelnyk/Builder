import { ADD_POSITION, DELETE_POSITION } from "../../constants";

export const addPosition = (employment) => ({
  type: ADD_POSITION,
  payload: employment,
});

export const deletePosition = (index) => ({
  type: DELETE_POSITION,
  payload: index,
});
