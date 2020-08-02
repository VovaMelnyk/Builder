import React from "react";
import styles from "./PreloaderV1.module.css";

const PreloaderV1 = () => {
  return (
    <div>
      <div className={styles.gridTemplate}>
        <p className={styles.one}></p>
        <p className={styles.two}></p>
        <p className={styles.three}></p>
        <p className={styles.four}></p>

        <p className={styles.six}></p>

        <p className={styles.eight}></p>
        <p className={styles.nine}></p>
      </div>
    </div>
  );
};

export default PreloaderV1;
