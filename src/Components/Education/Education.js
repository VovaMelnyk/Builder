import React, { useState } from "react";
import style from "./Education.module.css";
import withToggle from "../../hoc/withToggle";
import EducationItem from "./EducationItem"

import { useSelector, useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

const Education = (props) => {
  console.log(props);

  const education = useSelector((state) => state.resume.educations);
  const dispatch = useDispatch;

  console.log(education);



  // const [schoolInfo, setSchoolInfo] = useState(education)
//   const [schoolInfo, setSchoolInfo] = useState(initialState);

//   const handleChangeStart = (date1) => {
//     setSchoolInfo({ ...schoolInfo, start: date1 });
//   };

//   const handleChangeEnd = (date1) => {
//     setSchoolInfo({ ...schoolInfo, end: date1 });
//   };

  // const addButton = () => {
  //     setDate([...date, {school: "", degree: "", dateStart: new Date(), dateEnd: new Date()}])
  // }

  return (
    <div className={style.wraper}>
      <h1 className={style.title}>Education</h1>

    {education.map(el => (
        <EducationItem el={el}/>
    ))}


      <button className={style.addButton}>+ Add Education</button>
    </div>
  );
};

export default Education;
