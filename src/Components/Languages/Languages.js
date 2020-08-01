import React, { Component } from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import styles from "./Languages.module.css";

class Languages extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Languages</div>
        <LanguageItem />
        <button className={styles.button}> &#10133; Add Language</button>
      </div>
    );
  }
}

export default Languages;
