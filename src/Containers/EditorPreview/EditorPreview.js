import React, { Fragment } from "react";
import styles from "./EditorPreview.module.css";
import { NavLink } from "react-router-dom";
import { paths } from "../../constants";
const EditorPreview = () => {
  const { templates } = paths;
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
        <NavLink
          to={templates}
          className={`${styles.Title} ${styles.SelectTitle}`}
        >
          Select Template
        </NavLink>
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
