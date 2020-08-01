import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./EmploymentHistoryItem.module.css";
import "react-datepicker/dist/react-datepicker.css";

const EmploymentHistoryItem = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div
      className={`${styles.EmploymentHistoryItem_Container} ${styles.mb_16}`}
    >
      <div className={styles.EmploymentHistoryItem_Header}>
        <div className={styles.EmploymentHistoryItem_Editor_Box}>
          <h5 className={styles.EmploymentHistoryItem_Editor_Title}>
            Job Title
          </h5>
          <div className={styles.EmploymentHistoryItem_Editor_Edit_Btn_Box}>
            <button
              className={`${styles.EmploymentHistoryItem_Editor_Btn} ${styles.EmploymentHistoryItem_Editor_Edit_Btn}`}
            >
              Edit
            </button>
            <button
              className={`${styles.EmploymentHistoryItem_Editor_Btn} ${styles.EmploymentHistoryItem_Editor_Delete_Btn}`}
            >
              Delete
            </button>
            <button
              className={`${styles.EmploymentHistoryItem_Editor_Btn} ${styles.EmploymentHistoryItem_Editor_Toggle_Btn}`}
            ></button>
          </div>
        </div>
        <div className={styles.EmploymentHistoryItem_Editor_Years_Box}>
          <p className={styles.EmploymentHistoryItem_Editor_Years_Descr}>
            Start
            <span className={styles.EmploymentHistoryItem_Editor_Years_Span}>
              mm/year
            </span>
          </p>
          <p className={styles.EmploymentHistoryItem_Editor_Years_Descr}>
            End
            <span className={styles.EmploymentHistoryItem_Editor_Years_Span}>
              mm/year
            </span>
          </p>
        </div>
      </div>
      <form className={styles.EmploymentHistoryItem_Form}>
        <input
          type="text"
          placeholder="Job Title"
          className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Width} ${styles.mr_16}`}
        />
        <input
          type="text"
          placeholder="Employer"
          className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Width} ${styles.mb_16}`}
        />
        <div
          className={`${styles.EmploymentHistoryItem_Calendar_Container} ${styles.mr_16}`}
        >
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Date} ${styles.mr_16} ${styles.mb_16}`}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Date} ${styles.mb_16}`}
            calendarClassName={styles.EmploymentHistoryItem_Calendar}
          />
        </div>
        <input
          type="text"
          placeholder="City"
          className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Width}`}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Area}`}
        ></textarea>
      </form>
    </div>
  );
};

export default EmploymentHistoryItem;
