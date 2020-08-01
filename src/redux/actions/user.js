import { reduxUserTypes } from "../../constants";

export const logOutUser = () => ({
  type: reduxUserTypes.LOG_OUT
});

export const logInUser = ({ email, uid }) => ({
  type: reduxUserTypes.LOG_IN,
  payload: { email, uid }
});
