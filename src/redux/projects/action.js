import { ADD_PROJECT, SET_PROJECT, DELETE_PROJECT } from "./types";
import { CLEAR_RESUME, UPDATE_RESUME } from "../../constants";

export const addProject = (data) => ({
  type: ADD_PROJECT,
  payload: data,
});

export const setProject = (index, project) => ({
  type: SET_PROJECT,
  payload: { index, project },
});

export const deleteProject = (index) => ({
  type: DELETE_PROJECT,
  payload: index,
});

export const clearResume = () => ({
  type: CLEAR_RESUME,
});

export const updateResume = (data) => ({
  type: UPDATE_RESUME,
  payload: data,
});
