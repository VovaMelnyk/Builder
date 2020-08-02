import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import moment from "moment";
import {
  deletePosition,
  changePositionData,
  changePositionStartDate,
  changePositionEndDate,
} from "../../redux/actions/employmentHistory";
import withToggle from "../../hoc/withToggle";
import styles from "./EmploymentHistoryItem.module.css";
import "react-datepicker/dist/react-datepicker.css";

const EmploymentHistoryItem = ({
  emHistory: { jobTitle, employer, start, end, city, description },
  index,
  open,
  toggle,
}) => {
  const dispatch = useDispatch();

  const deleteEmployment = () => {
    dispatch(deletePosition(index));
  };

  return (
    <div
      className={`${styles.EmploymentHistoryItem_Container} ${styles.mb_16}`}
    >
      <div className={styles.EmploymentHistoryItem_Header}>
        <div className={styles.EmploymentHistoryItem_Editor_Box}>
          <h5 className={styles.EmploymentHistoryItem_Editor_Title}>
            {jobTitle}
          </h5>
          <div className={styles.EmploymentHistoryItem_Editor_Edit_Btn_Box}>
            <button
              className={`${styles.EmploymentHistoryItem_Editor_Btn} ${styles.EmploymentHistoryItem_Editor_Edit_Btn}`}
              onClick={toggle}
            >
              Edit
            </button>
            <button
              className={`${styles.EmploymentHistoryItem_Editor_Btn} ${styles.EmploymentHistoryItem_Editor_Delete_Btn}`}
              onClick={deleteEmployment}
            >
              Delete
            </button>
            <button
              className={`${styles.EmploymentHistoryItem_Editor_Btn} ${
                !open
                  ? styles.EmploymentHistoryItem_Editor_Toggle_Btn
                  : styles.EmploymentHistoryItem_Editor_Toggle_Btn_Rotate
              }`}
              onClick={toggle}
            ></button>
          </div>
        </div>
        <div className={styles.EmploymentHistoryItem_Editor_Years_Box}>
          <p className={styles.EmploymentHistoryItem_Editor_Years_Descr}>
            Start
            <span className={styles.EmploymentHistoryItem_Editor_Years_Span}>
              {moment(start).format("MM/YYYY")}
            </span>
          </p>
          <p className={styles.EmploymentHistoryItem_Editor_Years_Descr}>
            End
            <span className={styles.EmploymentHistoryItem_Editor_Years_Span}>
              {moment(end).format("MM/YYYY")}
            </span>
          </p>
        </div>
      </div>
      {!open && (
        <form className={styles.EmploymentHistoryItem_Form}>
          <input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => dispatch(changePositionData(e, index))}
            className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Width} ${styles.mr_16}`}
          />
          <input
            type="text"
            placeholder="Employer"
            name="employer"
            value={employer}
            onChange={(e) => dispatch(changePositionData(e, index))}
            className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Width} ${styles.mb_16}`}
          />
          <div
            className={`${styles.EmploymentHistoryItem_Calendar_Container} ${styles.mr_16}`}
          >
            <DatePicker
              selected={moment(start)._d}
              onChange={(date) =>
                dispatch(changePositionStartDate(date, index))
              }
              dateFormat="MM/yyyy"
              showMonthYearPicker
              className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Date} ${styles.mr_16} ${styles.mb_16}`}
            />
            <DatePicker
              selected={moment(end)._d}
              onChange={(date) => dispatch(changePositionEndDate(date, index))}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Date} ${styles.mb_16}`}
              calendarClassName={styles.EmploymentHistoryItem_Calendar}
            />
          </div>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => dispatch(changePositionData(e, index))}
            className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Width}`}
          />
          <textarea
            name="description"
            value={description}
            cols="30"
            rows="10"
            placeholder="Description"
            onChange={(e) => dispatch(changePositionData(e, index))}
            className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Area}`}
          ></textarea>
        </form>
      )}
    </div>
  );
};

export default withToggle(EmploymentHistoryItem);
