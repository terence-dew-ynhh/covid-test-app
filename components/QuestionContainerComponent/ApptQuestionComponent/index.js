import { useState, useEffect } from 'react';
import styles from './EmployeeQuestionComponent.module.css';

const EmployeeQuestion = ({ nextPage, isPrevEnabled, isDoneEnabled, setSchedulerURL }) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="info">
        If you are experiencing any respiratory or COVID-like symptoms, please proceed with self-scheduling. Testing for flu, COVID and RSV is available. Please follow current YNHHS masking recommendations.        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Please select a visit type
          </legend>
          <input
            id="employee_staff_check_sick"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setSchedulerURL("Sick");
              isDoneEnabled(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_sick">
            Sick Visit
          </label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_vacc"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setSchedulerURL("Vaccine");
              isDoneEnabled(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_vacc">
            Vaccine
          </label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default EmployeeQuestion;
