import React from "react";
import styles from "./Projects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = () => {

  return (
    <div className={styles.project_item}>
        <h3 className={styles.title}>Projects</h3>
            <ProjectItem/>
        <button className={`${styles.btn_add} ${styles.btn_add_logo}`}>Add Project</button>
    </div>
  );
};

export default Projects;
