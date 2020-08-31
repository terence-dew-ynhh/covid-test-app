import { useState, useEffect } from 'react';
import styles from './BreastIssueQuestionComponent.module.css'


 const BreastIssueQuestion =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      {/* <p className="error" hidden={isEmployee}>
          Sorry, please navigate to a public testing website to schedule your
          test
        </p> */}
        <fieldset className="radio_grp_set">
          <legend>
            Are you having a new issue/problem with your breast today? (e.g., a lump in breast or nipple discharge)
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

export default BreastIssueQuestion;