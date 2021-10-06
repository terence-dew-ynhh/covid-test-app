import { useState, useEffect } from 'react';
import styles from './EmploymentStatusComponent.module.css';

const EmploymentStatus = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  schedulePush
}) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isEmployee}>
          This site is for healthcare worker scheduling only.  Please make an
          appointment for your test at 
          <a href="https://covidtesting2.ynhhs.org/" target="__blank">
            https://covidtesting2.ynhhs.org/
          </a>
        </p>
        <fieldset className="radio_grp_set">
          <legend>Please select one of the following: </legend>
          <input
            id="employee_staff_employee"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e);
            }}
          ></input>
          <label
            className={styles.blocking_label}
            htmlFor="employee_staff_employee"
          >
            I am considered a healthcare worker who works for Yale-New Haven
            Health System.
          </label>
          <br></br><br></br>

          <input
            id="employee_staff_nonemp1"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsEmployee(false);
            }}
          ></input>

          <label
            className={styles.blocking_label}
            htmlFor="employee_staff_nonemp1"
          >
            I am considered a healthcare worker and I work for Yale-New Haven
            Health System but I am making an appointment on behalf of a
            non-healthcare worker.{' '}
          </label>
          <br></br><br></br>
          <input
            id="employee_staff_nonemp2"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsEmployee(false);
            }}
          ></input>
          <label
            className={styles.blocking_label}
            htmlFor="employee_staff_nonemp2"
          >
            I am not considered a healthcare worker or I am a healthcare
            worker but I do not work for Yale-New Haven Health System.{' '}
          </label>
          <br></br>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default EmploymentStatus;
