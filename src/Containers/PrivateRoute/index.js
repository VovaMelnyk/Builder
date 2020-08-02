import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../../configFirebase";
const PrivateRoute = ({ component, ...rest }) => {
  let isAuth;
  const Interface = component;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        isAuth = true;
      } else {
        isAuth = false;
      }
    });
  }, []);

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
