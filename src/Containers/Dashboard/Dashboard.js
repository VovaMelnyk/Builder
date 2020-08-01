import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.created}>Created Resume</h1>
      <button className={styles.createButton}>Create New</button>
    </div>
  );
};

export default Dashboard;
