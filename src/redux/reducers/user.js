import { reduxUserTypes } from "../../constants";

const initialState = {
  email: "user@gmail.com",
  uid: "34234uhkj4jh2343424n23kl4"
};
const userLogOut = {
  email: "",
  uid: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxUserTypes.LOG_OUT:
      return userLogOut;
    case reduxUserTypes.LOG_IN:
      return action.payload;
    default:
      return state;
  }
};
