const initialState = [
  {
    jobTitle: "Front end Developer",
    employer: "Google",
    start: "",
    end: "",
    city: "Kyiv",
    description: "Bla bla bla bla",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
