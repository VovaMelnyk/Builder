import {
  SAVE_COLLECTION_TO_DATABASE,
  GET_COLLECTION_FROM_DATABASE,
  DELETE_COLLECTION_FROM_DATABASE,
} from "../../constants";

const initialState = [
  // {
  //   basicInfo: {
  //     type: 1,
  //     id: "",
  //     title: "Resume for Google",
  //     jobTitle: "Front End Developer",
  //     firstName: "User",
  //     lastName: "Usersky",
  //     email: "user@gmail.com",
  //     phone: "067-345-65-45",
  //     country: "Ukraine",
  //     city: "Kyiv",
  //     summary: "Bla bla bla bla",
  //   },
  //   employmentHistory: {
  //     jobTitle: "Front end Developer",
  //     employer: "Google",
  //     start: "",
  //     end: "",
  //     city: "Kyiv",
  //     description: "Bla bla bla bla",
  //   },
  // },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTION_FROM_DATABASE:
      return [...state, ...action.payload];
    case SAVE_COLLECTION_TO_DATABASE:
      return [...state, action.payload];
    case DELETE_COLLECTION_FROM_DATABASE:
      return state.filter((collection) => collection.id !== action.payload);
    default:
      return state;
  }
};
