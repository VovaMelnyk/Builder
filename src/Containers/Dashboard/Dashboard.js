import React from "react";
import styles from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";
import { paths } from "../../constants";
import DashboardItem from "../../Components/Dashboard/DashboardItem";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.created}>Created Resume</h1>
      <NavLink to={paths.editor} className={styles.createButton}>
        Create New
      </NavLink>
      <div className={styles.preloader}>
        <DashboardItem />
      </div>
    </div>
  );
};

export default Dashboard;
