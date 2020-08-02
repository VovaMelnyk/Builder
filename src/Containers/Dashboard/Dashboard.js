import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";
import { paths } from "../../constants";
import DashboardItem from "../../Components/Dashboard/DashboardItem";
import { useSelector, useDispatch } from "react-redux";
import { getResumeFromDatabase } from "../../redux/operations/resumeCollection";

const Dashboard = () => {
  const resumeList = useSelector((state) => state.resumeCollection);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(resumeList);

  useEffect(() => {
    dispatch(getResumeFromDatabase(user.uid));
  }, [dispatch, user.uid]);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.created}>Created Resume</h1>
      <NavLink to={paths.editor} className={styles.createButton}>
        Create New
      </NavLink>
      <div className={styles.preloader}>
        {resumeList.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          resumeList.map((el, index) => <DashboardItem {...el} key={index} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
