import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import SelectComponent from "../selectComponent/SelectComponent";
import { getFilteredList } from "../../helpers";
import {
  EXPERIENCE,
  MIN_BASE_PAY,
  WORK,
  ROLES,
  TECH_STACK,
} from "../../constants";

import styles from "./filters.module.scss";

const Filters = ({ filteredList, setFilteredList }) => {
    const jdList = useSelector((state) => state.changeTheData) || [];
  const [searchInput, setSearchInput] = useState("");
  const [roles, setRoles] = useState([]);
  const [experience, setExperience] = useState(0);
  const [work, setWork] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [minBasePay, setMinBasePay] = useState(0);

  useEffect(()=> {
      const newList = getFilteredList({searchInput, roles, experience, work, techStack, minBasePay, jdList});
      setFilteredList(newList);
  }, [searchInput, roles, experience, work, techStack, minBasePay, jdList])

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleSelect = (e, label) => {
     switch (label) {
        case "Roles":
            setRoles(()=> e.map(data => data.value))
            break;
        case "Experience":
            setExperience(e.value)
            break;
        case "Work":
            setWork(()=> e.map(data => data.value))
            break;
        case "Tech stack":
            setTechStack(()=> e.map(data => data.value))
            break;
        case "Min Base Pay":
            setMinBasePay(e.value)
            break;
     
        default:
            break;
     }
  };

  return (
    <div className={styles.container}>
      <SelectComponent
        options={ROLES}
        isMulti
        placeholder="Roles"
        label="Roles"
        handleSelect={handleSelect}
      />
      <SelectComponent
        options={EXPERIENCE}
        placeholder="Experience"
        label="Experience"
        handleSelect={handleSelect}
      />
      <SelectComponent
        options={WORK}
        isMulti
        placeholder="Work"
        label="Work"
        handleSelect={handleSelect}
      />
      <SelectComponent
        options={MIN_BASE_PAY}
        placeholder="Min Base Pay"
        label="Min Base Pay"
        handleSelect={handleSelect}
      />
      <label className={styles.inputBox}>
        <div className={styles.label}>Company/Location</div>
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
