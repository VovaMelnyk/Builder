import React from "react";
import styles from "./DashboardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteResumeFromDatabase } from "../../redux/operations/resumeCollection";

const DashboardItemV2 = () => {
  // const resumeCollectionId = useSelector((state) => state.resumeCollection.id);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const deleteDocument = (id) => {
    const collectionName = user.uid;
    dispatch(deleteResumeFromDatabase(collectionName, id));
  };

  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeName}>"basicInfo.title"</div>
      <div className={styles.resume}>
        <img src="/icons/resv2.png" />
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.button}>
          <img src="/icons/Dowload.svg" className={styles.buttonSvg} /> Download
        </button>
        <button className={styles.button}>
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
