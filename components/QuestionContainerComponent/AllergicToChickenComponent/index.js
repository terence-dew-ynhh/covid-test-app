import { useState, useEffect } from 'react';
import styles from './VaccineQuestionComponent.module.css';

const VaccineQuestionComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled
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
          Please consult Student Health Services before scheduling vaccine at
          203-932-7079.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Are you allergic to chicken eggs or chicken egg products?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default VaccineQuestionComponent;
