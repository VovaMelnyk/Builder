import React, { useState } from "react"
import style from "./Education.module.css";
import withToggle from "../../hoc/withToggle";
import DatePicker from "react-datepicker";
import moment from "moment";


const EducationItem =({el, open, toggle}) => {

    const initialState = {
        school: "Best school ever",
        degree: "master",
        start: "",
        end: "",
      };

    const [form, setForm] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value);
        setForm({...form, [name]: value})
    }

      const handleChangeEnd = (date1) => {
        setForm({ ...form, end: date1 });
  };

  const handleChangeStart = (date1) => {
    setForm({ ...form, start: date1 });
  };


  console.log(form);

            return (  
            <div>        
        <div className={style.degree}>
            <div className={style.degreeSchool}>
              <h2 className={style.schoolLabel}>School degree</h2>
              <div className={style.degreeEdits}>
                <div className={style.degreeEditIcon}></div>
                <p className={style.degreeEditsHover}>Edit</p>
                <div className={style.degreeDeleteIcon}></div>
                <p className={style.degreeEditsHover}>Delete</p>
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
              <p className={style.Date}>{`${moment(el.start).format("l")}`}</p>
              <p className={style.degreeText}>End</p>
              <p className={style.Date}>{`${moment(el.end).format("l")}`}</p>
            </div>
          </div> 
          
          {open && (
            <div className={style.fillIn}>
                <input
                  type="text"
                  placeholder="School"
                  name="school"
                  className={style.inputSpace}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Degree"
                  name="degree"
                  className={style.inputSpace}
                  onChange={handleChange}
                />

                <div className={style.fillInDate}>
                  {/* <input type="date" placeholder="Start date" name="startDate" /> */}
                  <DatePicker
                    selected={el.start}
                    onChange={handleChangeStart}
                    className={style.inputDate}
                    name="start"
                  />
                  <DatePicker
                    selected={el.end}
                    onChange={handleChangeEnd}
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
