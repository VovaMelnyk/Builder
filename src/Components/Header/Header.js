import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { paths } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/actions/user";
import { auth } from "../../configFirebase";
import storage from "../../helpers/storage";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isUserAuth = useSelector((state) => state.user);
  const logOut = () => {
    dispatch(logOutUser());
    auth.signOut();
    storage.save("user", {});
    history.push(paths.login);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      {!!Object.keys(isUserAuth).length && (
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.navItem}>
              <NavLink
                to={paths.dashboard}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Dashboard
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink
                to={paths.templates}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Templates
              </NavLink>
            </li>

            <li className={styles.headerLogOut} onClick={logOut}>
              Log Out
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
