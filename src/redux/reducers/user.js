import { reduxUserTypes } from "../../constants";

const initialState = {
  email: "user@gmail.com",
  uid: "34234uhkj4jh2343424n23kl4",
  error: null,
};

const userLogOut = {
  email: "",
  uid: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxUserTypes.LOG_OUT:
      return userLogOut;
    case reduxUserTypes.LOG_IN:
      return action.payload;
    case reduxUserTypes.REGISTER:
      return action.payload;
    case reduxUserTypes.USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
