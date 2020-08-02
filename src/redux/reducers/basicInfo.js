const initialState = {
  type: 1,
  id: "",
  title: "Resume for Google",
  jobTitle: "Front End Developer",
  firstName: "User",
  lastName: "Usersky",
  email: "user@gmail.com",
  phone: "067-345-65-45",
  country: "Ukraine",
  city: "Kyiv",
  summary: "Bla bla bla bla",
};

// const initialState = {
//   type: 1,
//   id: "2",
//   title: "",
//   jobTitle: "",
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   country: "",
//   city: "",
//   summary: "",
// };
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
