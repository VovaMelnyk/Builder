import React from "react";
import styles from "./Editor.module.css";
import EditorConstructor from "../EditorConstructor/EditorConstructor";
import Preview from "../../Components/Preview/Preview";
const Editor = () => {
  return (
    <div className={`${styles.editorWrapper} ${styles.BackgroundLight}`}>
      <EditorConstructor />
      <Preview />
    </div>
  );
};

export default Editor;
