export const addEducation = (data) => ({
    type: ADD_EDUCATION,
    payload: data
});

export const setEducation = (index, education) => ({
    type: SET_EDUCATION,
    payload: {index, education}
});

export const deleteEducation = (index) => ({
    type: DELETE_EDUCATION,
    payload: index
});

export const ADD_EDUCATION = "ADD_EDUCATION";
export const SET_EDUCATION = "SET_EDUCATION";
export const DELETE_EDUCATION = "DELETE_EDUCATION";