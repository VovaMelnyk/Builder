import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = () => {

  return (
    <div className={styles.project_item}>
        <h3 className={styles.title}>Projects</h3>
        <div className={styles.header}>
            <p className={styles.header__title}>Project Title</p>
            <div className={styles.header__btn_container}>
                <button className={`${styles.header__btn} ${styles.header__btn_pen}`}>Edit</button>
                <button className={`${styles.header__btn} ${styles.header__btn_close}`}>Delete</button>
                <button className={`${styles.header__btn} ${styles.header__btn_hide}`}></button>
            </div>
        </div>
        <form className={styles.header__form}>
            <div className={styles.header_form_container}>
                <input className={styles.form__title} type="text" placeholder="Project Title"></input>
                <input className={styles.form__company} type="text" placeholder="Company"></input>
            </div>
            <textarea className={styles.form__description} type="text" placeholder="Description"></textarea>
        </form>
        <button className={`${styles.btn_add} ${styles.btn_add_logo}`}>Add Project</button>
    </div>
  );
};

export default ProjectItem;
