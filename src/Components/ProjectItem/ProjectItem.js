import React, { useState, useEffect } from "react";
import styles from "./ProjectItem.module.css";
import { setProject } from "../../redux/projects/action";
import { useDispatch } from 'react-redux';

const ProjectItem = ({removeProject, index, company, description, title}) => {
    const [titleProject, setTitleProject] = useState(title);
    const [companyProject, setCompanyProject] = useState(company);
    const [descriptionProject, setDescriptionProject] = useState(description);
    const [hiddenForm, setHiddenForm] = useState(false);

    const dispatch = useDispatch();

    const changeTitle = (e) => {
        setTitleProject(e.target.value);
        dispatch(setProject(index, {projectTitle: e.target.value, company: companyProject, description: descriptionProject}))
    };
    const changeCompany = (e) => {
        setCompanyProject(e.target.value);
        dispatch(setProject(index, {projectTitle: titleProject, company: e.target.value, description: descriptionProject }))
    };
    const changeDescription = (e) => {
        setDescriptionProject(e.target.value);
        dispatch(setProject(index, {projectTitle: titleProject, company: companyProject, description: e.target.value}))
    };

    const remove = () => {
        removeProject(index);
    };

    const toggleHide = () => {
        setHiddenForm(!hiddenForm);
    };

    const toggleHideEdit = () => {
        if(hiddenForm){
            setHiddenForm(!hiddenForm); 
        }
    };

    return (
        <div className={styles.project_item}>
            <div className={styles.header}>
                <p className={styles.header__title}>{titleProject}</p>
                <div className={styles.header__btn_container}>
                    <button className={`${styles.header__btn} ${styles.header__btn_pen}`} onClick={toggleHideEdit}>Edit</button>
                    <button className={`${styles.header__btn} ${styles.header__btn_close}`} onClick={remove}>Delete</button>
                    <button className={`${styles.header__btn} ${hiddenForm ? styles.header__btn_hide_down : styles.header__btn_hide_up}`} onClick={toggleHide}></button>
                </div>
            </div>
            <form className={hiddenForm ? styles.header__form_hide : styles.header__form}>
                <div className={styles.header_form_container}>
                    <input className={styles.form__title} type="text" placeholder="Project Title" value={titleProject} onChange={changeTitle}></input>
                    <input className={styles.form__company} type="text" placeholder="Company" value={companyProject} onChange={changeCompany}></input>
                </div>
                <textarea className={styles.form__description} type="text" placeholder="Description" value={descriptionProject} onChange={changeDescription}></textarea>
            </form>
        </div>
    );
};

export default ProjectItem;
