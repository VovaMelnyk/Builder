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
    default:
      return state;
  }
};
