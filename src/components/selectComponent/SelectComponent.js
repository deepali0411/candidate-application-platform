import React from "react";

import Select from "react-select";
import styles from './selectComponent.module.scss';


export default function SelectComponent({options=[], isMulti=false, placeholder, label, handleSelect, value}) {
  return (
    <label className={styles.container}>
      <div className={styles.label}>{label}</div>
    <Select
      placeholder={placeholder}
      isMulti={isMulti}
      name="colors"
      options={options}
      className={styles.select}
      classNamePrefix="select"
      value={value}
      onChange={(e) => handleSelect(e, label)}
    />
    </label>
  );
}
