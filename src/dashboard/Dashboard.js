import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import JobCard from "../components/jobCard/JobCard";
import Filters from "../components/filters/Filters";

import styles from "./dashboard.module.scss";

const Dashboard = (props) => {
  const jdList = useSelector((state) => state.changeTheData) || [];
  const [filteredList, setFilteredList] = useState([]);
  console.log('filteredList: ', filteredList);

  useEffect(()=> {
    setFilteredList(jdList);
  },[])

  const renderCards = useMemo(() => {
    return filteredList?.map((data) => {
      return <JobCard cardData={data} key={data?.jdUid} />;
    });
  }, [filteredList]);

  return (
    <div className={styles.Dashboard}>
      <h1 className={styles.weekDay}>WeekDay</h1>
      <div className={styles.body}>
        <Filters setFilteredList={setFilteredList} filteredList={filteredList} />
      <div className={styles.cardsContainer}>{renderCards}</div>
      </div>
    </div>
  );
};
export default Dashboard;
