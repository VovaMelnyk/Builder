const {
  SAVE_COLLECTION_TO_DATABASE,
  GET_COLLECTION_FROM_DATABASE,
  DELETE_COLLECTION_FROM_DATABASE,
  UPDATE_COLLECTION_IN_DATABASE,
} = require("../../constants");

export const saveResume = (collection) => ({
  type: SAVE_COLLECTION_TO_DATABASE,
  payload: collection,
});

export const getResume = (collection) => ({
  type: GET_COLLECTION_FROM_DATABASE,
  payload: collection,
});

export const deleteResume = (id) => ({
  type: DELETE_COLLECTION_FROM_DATABASE,
  payload: id,
});

export const editResume = (id, data) => ({
  type: UPDATE_COLLECTION_IN_DATABASE,
  payload: {
    id,
    data,
  },
});
