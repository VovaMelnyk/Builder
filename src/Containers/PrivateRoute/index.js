import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../../configFirebase";
const PrivateRoute = ({ component, ...rest }) => {
  let isAuth = true;
  const Interface = component;

  auth.onAuthStateChanged((user) => {
    if (user) {
      isAuth = true;
    } else {
      isAuth = true;
    }
  });
  console.log(isAuth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Interface {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
