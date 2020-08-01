import React from "react";
import styles from "./DashboardItem.module.css";
const DashboardItem = () => {
  return (
    <div className={styles.resumeItem}>
      <h2 className={styles.resumeName}>Resume for GoIT</h2>
      <div className={styles.resume}></div>
      <div className={styles.buttonBlock}>
        <button className={styles.button}>
          <img src="/icons/Dowload.svg" className={styles.buttonSvg} /> Download
        </button>
        <button className={styles.button}>
          <img src="/icons/Edit.svg" className={styles.buttonSvg} />
          Edit
        </button>
        <button className={styles.button}>
          <img src="/icons/Delete.svg" className={styles.buttonSvg} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashboardItem;
