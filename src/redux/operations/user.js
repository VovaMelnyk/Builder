import { auth } from "../../configFirebase";
import { registerUser, userError, logInUser } from "../actions/user";
import { paths } from "../../constants/index";

export const createUserRegistration = (user, history) => async (dispatch) => {
  const { email, password } = user;
  try {
    const registerResult = await auth.createUserWithEmailAndPassword(
      email,
      password
    );

    const userAuthenticated = {
      email: registerResult.user.email,
      uid: registerResult.user.uid,
    };

    dispatch(registerUser(userAuthenticated));

    history.push(paths.dashboard);
  } catch (error) {
    dispatch(userError(error));
  }
};

export const createUserLogin = (user, history) => async (dispatch) => {
  const { email, password } = user;
  try {
    const registerResult = await auth.signInWithEmailAndPassword(
      email,
      password
    );

    const userAuthenticated = {
      email: registerResult.user.email,
      uid: registerResult.user.uid,
    };

    dispatch(logInUser(userAuthenticated));

    history.push(paths.dashboard);
  } catch (error) {
    dispatch(userError(error));
  }
};
