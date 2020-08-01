import React from "react";
import styles from "./BasicInfo.module.css";

const BasicInfo = () => {
  return (
    <div>
      <form className={styles.basicForm}>
        <input
          className={styles.titleInput}
          type="text"
          name="title"
          placeholder="Title"
          autoFocus
          //   value={title}
          // onChange={inputHandler}
        />

        <h2 className={styles.caption}>Personal Details</h2>
        <input
          className={styles.jobTitle}
          type="text"
          name="jobTitle"
          placeholder="Job title"
          // value={jobTitle}
          // onChange={inputHandler}
        />
        <div className={styles.smallInputsWrapper}>
          <input
            className={styles.smallInput}
            type="text"
            name="firstName"
            // value={firstName}
            placeholder="First Name"
            // onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="text"
            name="lastName"
            placeholder="Last Name"
            // value={lastName}
            // onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="email"
            name="email"
            placeholder="Email"
            // value={email}
            // onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="text"
            name="phone"
            placeholder="Phone"
            // value={phone}
            // onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="text"
            name="country"
            placeholder="Country"
            // value={country}
            // onChange={inputHandler}
          />

          <input
            className={styles.smallInput}
            type="text"
            name="city"
            placeholder="City"
            // value={city}
            // onChange={inputHandler}
          />
        </div>

        <h2 className={styles.caption}>Professional Summary</h2>
        <textarea
          className={styles.summaryInput}
          type="text"
          name="summary"
          placeholder="Summary"
          rows="11"
          //   value={summary}
          // onChange={inputHandler}
        />
      </form>
    </div>
  );
};

export default BasicInfo;
