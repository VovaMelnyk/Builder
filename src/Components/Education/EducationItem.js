import React from "react"
import style from "./Education.module.css";
import withToggle from "../../hoc/withToggle";
import DatePicker from "react-datepicker";
import moment from "moment";
import { connect, useDispatch } from "react-redux";
import { setEducation } from '../../redux/actions/educations'


const EducationItem =({school, index, degree, start, end, open, toggle, handleRemoveClick}) => {
  const remove = (index) => {
    handleRemoveClick(index);
  };

  const dispatch = useDispatch()

  const handleSchool = (e) => {
      console.log(e.target.value);
     dispatch(setEducation(index, {school: e.target.value, degree: degree, start: start, end: end}))
  }

  const handleDegree = (e) => {
    dispatch(setEducation(index, {school: school, degree: e.target.value, start: start, end: end}))
 }

 const handleStart = (data) => {
    //  console.log(e.target.value);
    dispatch(setEducation(index, {school: school, degree: degree, start: data, end: end}))
 }

 const handleEnd = (data) => {
    dispatch(setEducation(index, {school: school, degree: degree, start: start, end: data}))
 }

return (  
<div>        
  <div className={style.degree}>
    <div className={style.degreeSchool}>
    <h2 className={style.schoolLabel}>{`${!!school ? school : 'School'} ${!!degree ? degree : 'degree'}`}</h2>
    <div className={style.degreeEdits}>

    <div onClick={toggle} className={style.degreeEditsHover}>
      <div className={style.degreeEditIcon}></div>
        <p  >Edit</p>
        </div>

        <div onClick={remove} className={style.degreeEditsHover}>
        <div className={style.degreeDeleteIcon}></div>
        <p  >Delete</p>
        </div>
        <div
        className={
          !open
            ? style.degreeTreeangle
            : style.degreeTreeangleRotate
        }
        onClick={toggle}
        ></div>
      </div>
    </div>

  <div className={style.degreeDates}>
    <p className={style.degreeText}>Start</p>
    <p className={style.Date}>{`${moment(start).format("l")}`}</p>
    <p className={style.degreeText}>End</p>
    <p className={style.Date}>{`${moment(end).format("l")}`}</p>
  </div>
</div> 

{open && (
<div className={style.fillIn}>
  <input
    type="text"
    placeholder="School"
    name="school"
    className={style.inputSpace}
    // value={school}
    onChange={handleSchool}
    // onChange={handleChange}
  />
  <input
    type="text"
    placeholder="Degree"
    name="degree"
    className={style.inputSpace}
    // value={degree}
    onChange={handleDegree}
  />

  <div className={style.fillInDate}>
    {/* <input type="date" placeholder="Start date" name="startDate" /> */}
    <DatePicker
      selected={start}
      // onChange={handleChangeStart}
      className={style.inputDate}
      name="start"
      onChange={handleStart}
    />
    <DatePicker
      selected={end}
      // onChange={handleChangeEnd}
      className={style.inputDate}
      name="end"
      onChange={handleEnd}
    />
    {/* <input type="date" placeholder="End date" name="endDate" className={style.inputDate}/> */}
  </div>
</div>
)}

</div>
)
}

export default withToggle(EducationItem);
