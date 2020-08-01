import {ADD_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION} from './types';

export const addEducation = () => ({
    type: ADD_EDUCATION,
    payload: data
})

export const deleteEducation = () => ({
    type: DELETE_EDUCATION,
    payload: id
})