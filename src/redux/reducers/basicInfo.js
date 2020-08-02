import { BASIC_INFO, CLEAR_RESUME } from "../../constants/index";
import { CHANGE_TYPE } from "../../constants";

const initialState = {
  type: 1,
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
    case CHANGE_TYPE:
      return { ...state, ...action.payload };
    case CLEAR_RESUME:
      return initialState;
    default:
      return state;
  }
};
