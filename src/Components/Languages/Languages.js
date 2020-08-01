import React from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import styles from "./Languages.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addLanguage } from "../../redux/actions/languages";

const Languages = () => {
  const languages = useSelector((state) => state.resume.languages);
  const dispatch = useDispatch();
  const addNewLanguage = () => {
    dispatch(addLanguage());
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Languages</div>
      {languages.map((languageItem, index) => (
        <LanguageItem
          language={languageItem.language}
          level={languageItem.level}
          index={index}
          key={index}
        />
      ))}

      <button className={styles.button} onClick={addNewLanguage}>
        {" "}
        &#10133; Add Language
      </button>
    </div>
  );
};

export default Languages;
