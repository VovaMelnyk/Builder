import {
  ADD_POSITION,
  DELETE_POSITION,
  CHANGE_DATA_POSITION,
  CHANGE_POSITION_START_DATE,
  CHANGE_POSITION_END_DATE,
} from "../../constants";

export const addPosition = (employment) => ({
  type: ADD_POSITION,
  payload: employment,
});

export const deletePosition = (index) => ({
  type: DELETE_POSITION,
  payload: index,
});

export const changePositionData = ({ target }, index) => ({
  type: CHANGE_DATA_POSITION,
  payload: {
    target,
    index,
  },
});

export const changePositionStartDate = (start, index) => ({
  type: CHANGE_POSITION_START_DATE,
  payload: {
    start,
    index,
  },
});

export const changePositionEndDate = (end, index) => ({
  type: CHANGE_POSITION_END_DATE,
  payload: {
    end,
    index,
  },
});
