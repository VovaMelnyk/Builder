import React, { useState } from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = () => {
    const [title, setTitle] = useState('Project Title');
    const [hiddenForm, setHiddenForm] = useState(false);

    const titleChange = (e) => {
        setTitle(e.target.value)
    };

    const toggleHide = () => {
        setHiddenForm(!hiddenForm);
    };

    const toggleHideEdit = () => {
        if(hiddenForm){
            setHiddenForm(!hiddenForm); 
        }
    }

    return (
        <div className={styles.project_item}>
            <div className={styles.header}>
                <p className={styles.header__title}>{title}</p>
                <div className={styles.header__btn_container}>
                    <button className={`${styles.header__btn} ${styles.header__btn_pen}`} onClick={toggleHideEdit}>Edit</button>
                    <button className={`${styles.header__btn} ${styles.header__btn_close}`}>Delete</button>
                    <button className={`${styles.header__btn} ${hiddenForm ? styles.header__btn_hide_down : styles.header__btn_hide_up}`} onClick={toggleHide}></button>
                </div>
            </div>
            <form className={hiddenForm ? styles.header__form_hide : styles.header__form}>
                <div className={styles.header_form_container}>
                    <input className={styles.form__title} type="text" placeholder="Project Title" onChange={titleChange}></input>
                    <input className={styles.form__company} type="text" placeholder="Company"></input>
                </div>
                <textarea className={styles.form__description} type="text" placeholder="Description"></textarea>
            </form>
        </div>
    );
};

export default ProjectItem;
