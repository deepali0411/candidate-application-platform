import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import styles from "./dashboard.module.scss";
import JobCard from "../components/jobCard/JobCard";

const Dashboard = (props) => {
  const jdList = useSelector((state) => state.changeTheData) || [];

  const renderCards = useMemo(() => {
    return jdList?.map((data) => {
      return <JobCard cardData={data} key={data?.jdUid} />;
    });
  }, [jdList]);

  return (
    <div className={styles.Dashboard}>
      <div className={styles.cardsContainer}>{renderCards}</div>
    </div>
  );
};
export default Dashboard;
