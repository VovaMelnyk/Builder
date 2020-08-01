import { ADD_EDUCATION, SET_EDUCATION, DELETE_EDUCATION } from '../actions/educations';

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
    case SET_EDUCATION:
      return
    case DELETE_EDUCATION:
      const newStateDelete = state.slice();
      newStateDelete.splice(action.payload, 1);
      return newStateDelete;
    default:
      return state;
  }
};
