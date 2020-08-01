import React from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import styles from "./Languages.module.css";
import { useSelector } from "react-redux";

const Languages = () => {
  const languages = useSelector((state) => state.resume.languages);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Languages</div>
      {languages.map((language) => (
        <LanguageItem language={language} key={language.language} />
      ))}

      <button className={styles.button}> &#10133; Add Language</button>
    </div>
  );
};

export default Languages;
