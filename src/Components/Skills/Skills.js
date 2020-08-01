import React from "react";
import classes from "./Skills.module.css";
import SkillItem from "../SkillItem/SkillItem";
import { useSelector } from "react-redux";

const Skills = () => {
  const skillsList = useSelector((state) => state.resume.skills);
  console.log(skillsList);
  return (
    <div className={classes.Container}>
      <h2 className={classes.Skill__title}>Skills</h2>
      <ul className={classes.Skill__list}>
        {skillsList.map((skill) => (
          <li>
            <SkillItem {...skill} />
          </li>
        ))}
      </ul>
      <button
        className={`${classes.Skill__submit} ${classes.SkillItem_plus}`}
        type="submit"
      >
        Add Skill
      </button>
    </div>
  );
};

export default Skills;
