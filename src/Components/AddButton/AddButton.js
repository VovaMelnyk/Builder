import React from "react";
import styles from "./AddButton.module.css";

const AddButton = ({ onClick, title }) => {
  return (
    <button className={styles.Add_Btn} onClick={onClick} type="submit">
      Add {title}
    </button>
  );
};

export default AddButton;
