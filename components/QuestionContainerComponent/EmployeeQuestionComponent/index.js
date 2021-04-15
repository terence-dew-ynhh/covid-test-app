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
          Please schedule your test here: 
          <a href="https://www.ynhhs.org/patient-care/covid-19/testing/testing-locations.aspx" >
          Yale New Haven Health | COVID-19 Testing (ynhhs.org)
          </a>
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Are you an employee or tenant of Mohegan Sun?
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