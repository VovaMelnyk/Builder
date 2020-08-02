import { CLEAR_RESUME } from "../../constants";

export const addLanguage = () => ({
  type: "ADD_LANGUAGE",
  payload: { language: "", level: "" },
});

export const deleteLanguage = (index) => ({
  type: "DELETE_LANGUAGE",
  payload: index,
});

export const updateLanguage = (index, editLanguage) => ({
  type: "UPDATE_LANGUAGE",
  payload: { index, editLanguage },
});

export const clearResume = () => ({
  type: CLEAR_RESUME,
});
