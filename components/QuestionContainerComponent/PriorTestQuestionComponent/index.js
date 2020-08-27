import { useState, useEffect } from 'react';
import styles from './PriorTestQuestionComponent.module.css'


 const PriorTestQuestion =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>

        <fieldset className="radio_grp_set">
          <legend>
          Do you need a test prior to a medical procedure?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(true);
              document.location.href = 'https://www.ynhhs.org/patient-care/covid-19/testing/covid-testing-locations-pre-procedure.aspx'
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage()
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

export default PriorTestQuestion;