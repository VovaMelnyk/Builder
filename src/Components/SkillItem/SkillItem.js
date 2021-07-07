import React, { useState } from "react";
import classes from "./SkillItem.module.css";
import withToggle from "../../hoc/withToggle";
import { useSelector } from "react-redux";

const SkillItem = ({ skill, toggle, open }) => {
  return (
    <>
      <div className={classes.SkillsContainer}>
        <div className={classes.Wrapper}>
          <p className={classes.SkillItem_name}>{skill}</p>
          <div className={classes.SkillItem_buttons}>
            <button
              className={`${classes.SkillItem_button} ${classes.SkillItem_edit}`}
              onClick={toggle}
            >
              Edit
            </button>
            <button
              className={`${classes.SkillItem_button} ${classes.SkillItem_delete}`}
            >
              Delete
            </button>
            <button
              className={`${classes.SkillItem_button} ${classes.SkillItem_sort}`}
              onClick={toggle}
            ></button>
          </div>
        </div>
      </div>

      {open && (
        <form className={classes.SkillsInput}>
          <div className={classes.SkillsNameContainer}>
            <input
              className={classes.Skill__name}
              type="text"
              name="Skill"
              placeholder="Enter your skill"
            />
          </div>
        </form>
      )}
    </>
  );
};

export default withToggle(SkillItem);
