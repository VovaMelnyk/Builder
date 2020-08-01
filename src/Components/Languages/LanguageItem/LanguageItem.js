import React, { Component } from "react";
import styles from "./LanguageItem.module.css";
import withToggle from "../../../hoc/withToggle";

class LanguageItem extends Component {
  render() {
    console.log(this.props);
    const { open, toggle } = this.props;
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.header}>Ukrainian | Native</div>
          <div className={styles.buttonSpace}>
            <button className={styles.button} onClick={toggle}>
              Edit
            </button>
            <button className={styles.button}> &#9249; Delete</button>
            <button className={styles.button} onClick={toggle}>
              &darr;
            </button>
          </div>
        </div>
        {open && (
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter a language"
            ></input>
            <select className={styles.select}>
              <option value="" disabled selected>
                Level
              </option>
              <option>A 1</option>
              <option>A 2</option>
            </select>
          </form>
        )}
      </>
    );
  }
}

export default withToggle(LanguageItem);
