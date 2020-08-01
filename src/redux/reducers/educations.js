import {ADD_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION} from './types';

const initialState = [
  {
    school: "Best school ever",
    degree: "master",
    start: Date.now(),
    end: Date.now(),
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDUCATION:
      return [...state, action.payload]
    case DELETE_EDUCATION:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
