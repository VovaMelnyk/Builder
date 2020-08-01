import React from "react";
import styles from "./Editor.module.css";
import EditorConstructor from "../EditorConstructor/EditorConstructor";
const Editor = () => {
  return (
    <EditorConstructor className={styles.BackgroundLight}></EditorConstructor>
  );
};

export default Editor;
