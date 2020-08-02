import React, { Fragment, useState } from "react";
import styles from "./Templates.module.css";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelect } from "react-redux";
import COMPONENT from "../Editor/Editor";
import { changeType } from "../../redux/actions/basicInfo";

const Templates = () => {
  const path = useRouteMatch().path;
  const dispatch = useDispatch();
  const changeNumber = (number) => {
    dispatch(changeType(number));
  };

  return (
    <Fragment>
      <div className={styles.LinkWrapper}>
        <NavLink
          to={`${path}/1`}
          className={styles.Link}
          activeClassName={styles.ActiveLink}
          onClick={() => changeNumber(1)}
        >
          Resume v.1
        </NavLink>
        <NavLink
          to={`${path}/2`}
          className={styles.Link}
          activeClassName={styles.ActiveLink}
          onClick={() => changeNumber(2)}
        >
          Resume v.2
        </NavLink>
      </div>

      <Switch>
        <Route path={`${path}/1`} component={COMPONENT} />
        <Route path={`${path}/2`} component={COMPONENT} />
      </Switch>
    </Fragment>
  );
};

export default Templates;
