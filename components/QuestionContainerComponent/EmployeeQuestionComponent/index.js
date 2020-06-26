import { useState, useEffect } from 'react';
import styles from './EmployeeQuestionComponent.module.css'


 const EmployeeQuestion =({isNextEnabled, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isNextEnabled(false);
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
        <fieldset className="radio_grp_set">
          <legend>
            Are you an employee or medical staff member of Yale New Haven
            Health/ Yale Medicine?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              isNextEnabled(true);
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              isNextEnabled(false);
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
        <p className="error" hidden={isEmployee}>
          Sorry, please navigate to a public testing website to schedule your
          test
        </p>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default EmployeeQuestion;