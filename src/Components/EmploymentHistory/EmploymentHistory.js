import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EmploymentHistory.module.css";
import EmploymentHistoryItem from "../EmploymentHistoryItem/EmploymentHistoryItem";
import { addPosition } from "../../redux/actions/employmentHistory";
import moment from "moment";

const EmploymentHistory = () => {
  const employmentHistory = useSelector(
    (state) => state.resume.employmentHistory
  );
  const dispatch = useDispatch();

  const addNewEmplyment = () => {
    const newEmployment = {
      jobTitle: "",
      employer: "",
      start: moment(),
      end: moment(),
      city: "",
      description: "",
    };

    dispatch(addPosition(newEmployment));
  };

  return (
    <div>
      <h2 className={styles.EmploymentHistory_Title}>Employment History</h2>
      {employmentHistory.map((emHis, index) => (
        <EmploymentHistoryItem key={index} emHistory={emHis} index={index} />
      ))}

      <button
        className={styles.EmploymentHistory_Add_Btn}
        onClick={addNewEmplyment}
      >
        Add Position
      </button>
    </div>
  );
};

export default EmploymentHistory;
