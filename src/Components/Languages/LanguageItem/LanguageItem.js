import React from "react";
import styles from "./LanguageItem.module.css";
import withToggle from "../../../hoc/withToggle";
import Select from "react-select";

const LanguageItem = (props) => {
  const { open, toggle, language } = props;
  const options = [
    // { value: "", label: "Level..." },
    { value: "C2", label: "C2" },
    { value: "C1", label: "C1" },
    { value: "B2", label: "B2" },
    { value: "B1", label: "B1" },
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "Native", label: "Native speaker" },
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.languageName}>{language.language}</span> |{" "}
          <span className={styles.languageLevel}>{language.level}</span>
        </div>
        <div className={styles.buttonSpace}>
          <div className={styles.editBtn} onClick={toggle}>
            Edit
          </div>
          <div className={styles.deleteBtn}> Delete</div>
          <div className={styles.arrowBtn} onClick={toggle} value=" "></div>
        </div>
      </div>
      {open && (
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter a language"
          ></input>
          <Select
            className={styles.select}
            options={options}
            isClearable
            placeholder="level..."
          />
        </form>
      )}
    </>
  );
};

export default withToggle(LanguageItem);
