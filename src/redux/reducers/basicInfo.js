import { BASIC_INFO } from "../../constants/index";

const initialState = {
  type: null,
  id: "",
  title: "",
  jobTitle: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  summary: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BASIC_INFO:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};
