import React from "react";
import styles from "./EmploymentHistory.module.css";
import EmploymentHistoryItem from "../EmploymentHistoryItem/EmploymentHistoryItem";

const EmploymentHistory = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.EmploymentHistory_Title}>Employment History</h2>
      <EmploymentHistoryItem />
      <button className={styles.EmploymentHistory_Add_Btn}>Add Position</button>
    </div>
  );
};

export default EmploymentHistory;
