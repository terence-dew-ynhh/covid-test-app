import { useState, useEffect } from 'react';
import styles from './ReturnedFromHighRiskComponent.module.css'


 const ReturnedFromHighRisk =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isEmployee}>
      We are not testing employees who travel to non-high risk locations<br></br>
      We are not scheduling tests for travelers returning beyond 1 week from a high risk location

        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Have you returned OR will you be returning within 1 week from a High Risk Location and need a COVID-19 test to be cleared to return to work?
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

export default ReturnedFromHighRisk;