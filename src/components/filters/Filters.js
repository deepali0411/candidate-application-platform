import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import SelectComponent from "../selectComponent/SelectComponent";
import { getFilteredList } from "../../helpers";
import {
  EXPERIENCE,
  MIN_BASE_PAY,
  WORK,
  ROLES,
  LABEL,
} from "../../constants";

import styles from "./filters.module.scss";

const Filters = ({ setFilteredList }) => {
    const jdList = useSelector((state) => state.changeTheData) || [];
  const [searchInput, setSearchInput] = useState("");
  const [roles, setRoles] = useState([]);
  const [experience, setExperience] = useState(0);
  const [work, setWork] = useState([]);
  const [minBasePay, setMinBasePay] = useState(0);

  useEffect(()=> {
    // rendering filterd data
      const newList = getFilteredList({searchInput, roles, experience, work, minBasePay, jdList});
      setFilteredList(newList);
  }, [searchInput, roles, experience, work, minBasePay, jdList])

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleSelect = (e, label) => {
     switch (label) {
        case LABEL.ROLES:
            setRoles(()=> e.map(data => data.value))
            break;
        case LABEL.EXPERIENCE:
            setExperience(e.value)
            break;
        case LABEL.WORK:
            setWork(()=> e.map(data => data.value))
            break;
        case LABEL.MIN_BASE_PAY:
            setMinBasePay(e.value)
            break;
     
        default:
            break;
     }
  };

  return (
    <div className={styles.container}>
      {/* adding filter for roles */}
      <SelectComponent
        options={ROLES}
        isMulti
        placeholder={LABEL.ROLES}
        label={LABEL.ROLES}
        handleSelect={handleSelect}
      />
        {/* adding filter for minimum experience */}
      <SelectComponent
        options={EXPERIENCE}
        placeholder={LABEL.EXPERIENCE}
        label={LABEL.EXPERIENCE}
        handleSelect={handleSelect}
      />
       {/* adding filter for work from offic/home  */}
      <SelectComponent
        options={WORK}
        isMulti
        placeholder={LABEL.WORK}
        label={LABEL.WORK}
        handleSelect={handleSelect}
      />
       {/* adding filter for minimum base pay */}
      <SelectComponent
        options={MIN_BASE_PAY}
        placeholder={LABEL.MIN_BASE_PAY}
        label={LABEL.MIN_BASE_PAY}
        handleSelect={handleSelect}
      />
       {/* adding filter for searching on the basis of company name or location */}
      <label className={styles.inputBox}>
        <div className={styles.label}>{LABEL.COMPANY_LOCATION}</div>
        <input
          type="text"
          onChange={handleChangeInput}
          value={searchInput}
          placeholder="search by company name or location"
          className={styles.input}
        />
      </label>
    </div>
  );
};
export default Filters;
