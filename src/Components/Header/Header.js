import React from "react";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { paths } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/actions/user";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const isUserAuth = useSelector(state => state.user);
  const logOut = () => {
    dispatch(logOutUser());
  };

  const isSwitchOn = () => {
    if (
      location.pathname === paths.editor ||
      location.pathname === paths.templates ||
      location.pathname === `${paths.templates}/2`
    ) {
      return true;
    }
    return false;
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      {isUserAuth.email !== "" && (
        <nav
          className={
            isSwitchOn()
              ? `${styles.headerNav} ${styles.headerNavSwitcher}`
              : styles.headerNav
          }
        >
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
            {isSwitchOn() && (
              <li className={styles.navItem}>
                <ThemeSwitcher />
              </li>
            )}

            <li
              className={
                isSwitchOn()
                  ? `${styles.headerLogOut} ${styles.headerLogOutSwitch}`
                  : styles.headerLogOut
              }
              onClick={logOut}
            >
              Log Out
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
