import React from "react";
import styles from "./PreviewT2.module.css";

const Education = ({ school, degree, start, end }) => {
  return (
    <div>
      <h4 className={styles.title}>
        {school}, {degree}
      </h4>
      <p className={styles.date}>
        {start}-{end}
      </p>
    </div>
  );
};

export default Education;
