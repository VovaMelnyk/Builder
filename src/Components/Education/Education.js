import React, { useState } from "react";
import style from './Education.module.css'
import withToggle from "../../hoc/withToggle";
import DatePicker from "react-datepicker";
import moment from "moment"
 
import "react-datepicker/dist/react-datepicker.css";

const Education = (props) => {
    console.log(props);
    
    const initialState = {school: "", degree: "", dateStart: Date.now(), dateEnd: new Date()}

    const [schoolInfo, setSchoolInfo] = useState(initialState)

    const handleChangeStart = (date1) => {
        setSchoolInfo({...schoolInfo, dateStart: date1})        
    }

    const handleChangeEnd = (date1) => {
        setSchoolInfo({...schoolInfo, dateEnd: date1})        
    }

    // const addButton = () => {
    //     setDate([...date, {school: "", degree: "", dateStart: new Date(), dateEnd: new Date()}])
    // }

    

    console.log(schoolInfo);


  return (
    <div className={style.wraper}>
      <h1 className={style.title}>Education</h1>
      <div className={style.degree}>
        <div className={style.degreeSchool}>
          <h2 className={style.schoolLabel}>School degree</h2>
          <div className={style.degreeEdits}>
              <div className={style.degreeEditIcon}></div>
          <p className={style.degreeEditsHover}>Edit</p>
          <div className={style.degreeDeleteIcon}></div>
          <p className={style.degreeEditsHover}>Delete</p>
          <div className={!props.open ? style.degreeTreeangle : style.degreeTreeangleRotate} onClick={props.toggle}></div>
          </div>

        </div>
     
     
        <div className={style.degreeDates}>
          <p className={style.degreeText}>Start</p>
  <p className={style.Date}>{`${moment(schoolInfo.dateStart).format("l")}`}</p>
          <p className={style.degreeText}>End</p>
          <p className={style.Date}>{`${moment(schoolInfo.dateEnd).format("l")}`}</p>
        </div>
      </div>

{props.open && (
    
      <div className={style.fillIn}>
        <input type="text" placeholder="School" name="school" className={style.inputSpace}/>
        <input type="text" placeholder="Degree" name="school" className={style.inputSpace}/>

        <div className={style.fillInDate}>

            {/* <input type="date" placeholder="Start date" name="startDate" /> */}
            <DatePicker selected={schoolInfo.dateStart} onChange={handleChangeStart} className={style.inputDate} name="dateStart" />
            <DatePicker selected={schoolInfo.dateEnd} onChange={handleChangeEnd} className={style.inputDate} name="dateEnd"/>
            {/* <input type="date" placeholder="End date" name="endDate" className={style.inputDate}/> */}
        </div>
      </div>
)
}

      <button className={style.addButton}>+ Add Education</button>
    </div>
  );
};

export default withToggle(Education) ;
