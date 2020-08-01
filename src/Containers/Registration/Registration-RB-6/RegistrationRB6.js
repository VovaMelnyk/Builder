import React from "react";
import styles from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={styles.registrationPage}>
      <div className={styles.registrationModule}>
        <p className={styles.preTitle}>Resume Builder</p>
        <h2 className={styles.pageTitle}>Registration</h2>
        <form className={styles.form}>
          <div className={styles.formDiv}>
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail"
              id="RB6EmailInput"
            />
            <label className={styles.label} htmlFor="RB6EmailInput">
              E-mail
            </label>
          </div>
          <div className={styles.formDiv}>
            <input
              className={styles.input}
              type="text"
              placeholder="Password"
              id="RB6PasswordInput"
            />
            <label className={styles.label} htmlFor="RB6PasswordInput">
              Password
            </label>
          </div>
          <button className={styles.button}>Register</button>
        </form>
        <p className={styles.message}>
          Have account already?
          <a href="#" className={styles.link}>
            Log in
          </a>
        </p>
        <div className={styles.blackBox}></div>
        <div className={styles.orangeBox}></div>
        <div className={styles.rightCircle}></div>
        <div className={styles.bigCircle}></div>
        <div className={styles.middleCircle}></div>
      </div>
    </div>
  );
};

export default Registration;
