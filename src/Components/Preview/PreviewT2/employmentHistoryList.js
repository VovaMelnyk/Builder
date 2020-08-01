import React from "react";
import styles from "./PreviewT2.module.css";

const employmentHistoryList = ({
  jobTitle,
  employer,
  start,
  city,
  end,
  description,
}) => {
  return (
    <div>
      <h4 className={styles.title}>
        {jobTitle}, {employer}, {city}
      </h4>
      <p className={styles.date}>
        {start}-{end}
      </p>
      <p className={styles.summary}>{description}</p>
    </div>
  );
};

export default employmentHistoryList;
