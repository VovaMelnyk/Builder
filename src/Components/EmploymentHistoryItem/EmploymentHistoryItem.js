import React from "react";
import styles from "./EmploymentHistoryItem.module.css";

const EmploymentHistoryItem = () => {
  return (
    <div className={styles.EmploymentHistoryItem_Conteiner}>
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
        <input
          type="text"
          placeholder="Start Date"
          className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Date} ${styles.mr_16} ${styles.mb_16}`}
        />
        <input
          type="text"
          placeholder="End Date"
          className={`${styles.EmploymentHistoryItem_Form_Input} ${styles.EmploymentHistoryItem_Form_Input_Date} ${styles.mr_16} ${styles.mb_16}`}
        />
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
