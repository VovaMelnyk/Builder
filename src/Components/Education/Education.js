import React from "react";
import style from "./Education.module.css";
import EducationItem from "./EducationItem";
import {addEducation, deleteEducation } from '../../redux/actions/educations';
import { connect, useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

const Education = ({educations}) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addEducation({school: '', degree: '', start: Date.now(), end: Date.now()}))
  };

  const handleRemoveClick = (index) => {
      dispatch(deleteEducation(index));
  };

  return (
    <div className={style.wraper}>
      <h1 className={style.title}>Education</h1>

    {educations.map((el, index) => (
        <EducationItem key={index} school={el.school} index={index} degree={el.degree} start={el.start} end={el.end} handleRemoveClick={handleRemoveClick}/>
    ))}

      <button className={style.addButton} onClick={handleAddClick}>+ Add Education</button>
    </div>
  );
};

const mapStateToProps = state => ({
  educations: state.resume.educations
});

export default connect(mapStateToProps)(Education);
