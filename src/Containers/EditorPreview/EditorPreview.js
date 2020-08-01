import React, { Fragment } from "react";
import styles from "./EditorPreview.module.css";
const EditorPreview = () => {
  return (
    <Fragment>
      <div className={styles.MainWrapper}>
        <h2 className={`${styles.Title} ${styles.PreviewTitle}`}>Preview</h2>
        <div
          className={`${styles.ButtonWrapper} ${styles.ButtonDownloadWrapper} ${styles.Title}`}
        >
          <p>Download</p>
        </div>
        <div className={styles.SheetWrapper}></div>
        <a href="#" className={`${styles.Title} ${styles.SelectTitle}`}>
          Select Template
        </a>
        <div
          className={`${styles.Title} ${styles.ButtonWrapper} ${styles.ButtonSaveWrapper}`}
        >
          <p>Save</p>
        </div>
      </div>
    </Fragment>
  );
};

export default EditorPreview;
