import { useState, useEffect } from 'react';
import styles from './EmployeeQuestionComponent.module.css'


 const EmployeeQuestion =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isEmployee}>
      Testing is only available to active students, employees, or faculty of CCSU. Please call 860-832-1925 with any questions about eligibility for COVID-19 testing.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Are you an active student, employee, or faculty of CCSU?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage()
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default EmployeeQuestion;