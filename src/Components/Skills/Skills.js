import React from "react";
import classes from "./Skills.module.css";
import SkillItem from "../SkillItem/SkillItem";
import { useSelector, useDispatch } from "react-redux";
import { addSkill } from "../../redux/actions/skills";

const Skills = () => {
  const dispatch = useDispatch();

  const addOneSkill = () => {
    dispatch(addSkill());
  };

  const skillsList = useSelector(state => state.resume.skills);
  console.log(skillsList);
  return (
    <div className={classes.Container}>
      <h2 className={classes.Skill__title}>Skills</h2>
      <ul className={classes.Skill__list}>
        {skillsList.map((skill, index) => (
          <li className={classes.Skill__item}>
            <SkillItem {...skill} index={index} />
          </li>
        ))}
      </ul>
      <button
        className={`${classes.Skill__submit} `}
        type="submit"
        onClick={addOneSkill}
      >
        Add Skill
      </button>
    </div>
  );
};

export default Skills;
