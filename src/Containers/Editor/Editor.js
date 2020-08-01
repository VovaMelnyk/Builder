import React from "react";
import styles from "./Editor.module.css";
import EditorConstructor from "../EditorConstructor/EditorConstructor";
import PreviewT1 from "../../Components/Preview/PreviewT1/PreviewT1";
const Editor = () => {
  return (
    <div className={`${styles.editorWrapper} ${styles.BackgroundLight}`}>
      <EditorConstructor />
      <PreviewT1 />
    </div>
  );
};

export default Editor;
