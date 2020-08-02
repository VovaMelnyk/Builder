import {ADD_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION} from './types';
import { SET_EDUCATION } from '../actions/educations';

export const addEducation = () => ({
    type: ADD_EDUCATION,
    payload: data
})

export const deleteEducation = () => ({
    type: DELETE_EDUCATION,
    payload: id
})

export const setEducation = () => ({
    type: SET_EDUCATION,
    payload: {id, data}
})