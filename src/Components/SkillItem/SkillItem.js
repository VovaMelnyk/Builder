import React, { useState } from "react";
import classes from "./SkillItem.module.css";
import withToggle from "../../hoc/withToggle";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkill, updateSkill } from "../../redux/actions/skills";

const SkillItem = ({ skill, toggle, open, index }) => {
  const dispatch = useDispatch();

  const changeSkill = (event) => {
    dispatch(updateSkill(index, { skill: event.target.value }));
  };

  const deleteOneSkill = () => {
    dispatch(deleteSkill(index));
  };

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
              onClick={deleteOneSkill}
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
              onChange={changeSkill}
              className={classes.Skill__name}
              type="text"
              name="Skill"
              placeholder="Enter your skill"
              //   value={skill}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default withToggle(SkillItem);
