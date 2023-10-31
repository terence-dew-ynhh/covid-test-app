import { useState, useEffect } from 'react';
import styles from './EmployeeComponent.module.css';
import oeText from './employee.json';

const EmployeeComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish,

}) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
    {}
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
          <legend>{OEText[2]}</legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e, 1);
              setIsEmployee(true);
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
              setIsEmployee(false);

            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default EmployeeComponent;
