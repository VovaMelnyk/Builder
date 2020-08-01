import React from "react";
import styles from "./DashboardItem.module.css";

const DashboardItem = () => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeName}>"basicInfo.title"</div>
      <div className={styles.resume}>
        <div className={styles.previewT2}>
          <div className={styles.name}></div>
          <div className={styles.jobTitle}></div>

          <div className={styles.location}>
            <div className={styles.svg}></div>
            <div className={styles.svg}></div>
            <div className={styles.svg}></div>
          </div>
          <div className={styles.resumeBlock}>
            <div className={styles.profile}>
              <div className={styles.nameBlock}></div>
              <div className={styles.summary}></div>
            </div>
            <div className={styles.history}>
              <div className={styles.nameBlock}></div>
              <div>
                <div className={styles.list}></div>
              </div>
            </div>
            <div className={styles.education}>
              <div className={styles.nameBlock}></div>
              <div>
                <div className={styles.list}></div>
              </div>
            </div>

            <div className={styles.languages}>
              <div className={styles.nameBlock}></div>
              <div>
                <div className={styles.list}></div>
              </div>
            </div>
            <div className={styles.projects}>
              <div className={styles.nameBlock}></div>
              <div>
                <div className={styles.list}></div>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.nameBlock}></div>
              <div>
                <div className={styles.skill}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
