import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styles from "./Registration.module.css";
import { registerUser } from "../../redux/actions/user";
import { paths } from "../../constants";

const formInitialState = {
  email: "",
  password: ""
};

const Registration = () => {
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    // request to firebase
    const userData = {
      email: form.email,
      uid: "example id"
    };
    dispatch(registerUser(userData));
    history.push(paths.dashboard);
    setForm(formInitialState);
  };

  const { email, password } = form;
  return (
    <div className={styles.registrationPage}>
      <div className={styles.registrationModule}>
        <p className={styles.preTitle}>Resume Builder</p>
        <h2 className={styles.pageTitle}>Registration</h2>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formDiv}>
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail"
              id="RB6EmailInput"
              name="email"
              value={email}
              onChange={inputHandler}
            />
            <label className={styles.label} htmlFor="RB6EmailInput">
              E-mail
            </label>
          </div>
          <div className={styles.formDiv}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              id="RB6PasswordInput"
              name="password"
              value={password}
              onChange={inputHandler}
            />
            <label className={styles.label} htmlFor="RB6PasswordInput">
              Password
            </label>
          </div>
          <button className={styles.button}>Register</button>
        </form>
        <p className={styles.message}>
          Have account already?
          <Link to={paths.login} className={styles.link}>
            Log in
          </Link>
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
