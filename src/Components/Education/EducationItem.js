import React from "react"
import style from "./Education.module.css";
import withToggle from "../../hoc/withToggle";
import DatePicker from "react-datepicker";
import moment from "moment";


const EducationItem =({school, index, degree, start, end, open, toggle, handleRemoveClick}) => {
  const remove = (index) => {
    handleRemoveClick(index);
  };
return (  
<div>        
  <div className={style.degree}>
    <div className={style.degreeSchool}>
    <h2 className={style.schoolLabel}>{`${!!school ? school : 'School'} ${!!degree ? degree : 'degree'}`}</h2>
    <div className={style.degreeEdits}>
      <div className={style.degreeEditIcon}></div>
        <p className={style.degreeEditsHover}>Edit</p>
        <div className={style.degreeDeleteIcon}></div>
        <p className={style.degreeEditsHover} onClick={remove}>Delete</p>
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
    value={school}
    // onChange={handleChange}
  />
  <input
    type="text"
    placeholder="Degree"
    name="degree"
    className={style.inputSpace}
    value={degree}
    // onChange={handleChange}
  />

  <div className={style.fillInDate}>
    {/* <input type="date" placeholder="Start date" name="startDate" /> */}
    <DatePicker
      selected={start}
      // onChange={handleChangeStart}
      className={style.inputDate}
      name="start"
    />
    <DatePicker
      selected={end}
      // onChange={handleChangeEnd}
      className={style.inputDate}
      name="end"
    />
    {/* <input type="date" placeholder="End date" name="endDate" className={style.inputDate}/> */}
  </div>
</div>
)}

</div>
)
}

export default withToggle(EducationItem);
