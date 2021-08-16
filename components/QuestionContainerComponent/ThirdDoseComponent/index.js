import { useState, useEffect } from 'react';
import styles from './ThirdDoseComponent.module.css';
import oeText from './thirddose.json';

const ThirdDoseComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish,
  setImmunocompromised
}) => {
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
                 
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
          <legend>{OEText[2]}</legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setImmunocompromised(true)
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">{OEText[0]}</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage();
              setImmunocompromised(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ThirdDoseComponent;
