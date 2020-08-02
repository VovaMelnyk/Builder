import React from "react";
import styles from "./DashboardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteResumeFromDatabase } from "../../redux/operations/resumeCollection";
import { useHistory } from "react-router-dom";
import { paths, UPDATE_RESUME } from "../../constants";

const DashboardItemV2 = ({ id, basicInfo }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const collectionName = user.uid;
  const history = useHistory();
  const resumeCollections = useSelector((state) => state.resumeCollection);

  const deleteDocument = () => {
    dispatch(deleteResumeFromDatabase(collectionName, id));
  };

  const edit = () => {
    history.push(`${paths.editor}?id=${id}`);

    const res = resumeCollections.find((doc) => doc.id === id);

    dispatch({ type: UPDATE_RESUME, payload: res });
  };

  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeName}>{basicInfo.title}</div>
      <div className={styles.resume}>
        <img src="/icons/resv2.png" />
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.button}>
          <img src="/icons/Dowload.svg" className={styles.buttonSvg} /> Download
        </button>
        <button className={styles.button} onClick={edit}>
          <img src="/icons/Edit.svg" className={styles.buttonSvg} />
          Edit
        </button>
        <button className={styles.button} onClick={deleteDocument}>
          <img src="/icons/Delete.svg" className={styles.buttonSvg} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashboardItemV2;
