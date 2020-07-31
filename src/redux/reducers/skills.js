const initialState = [
  { skill: "React" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JS" },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
