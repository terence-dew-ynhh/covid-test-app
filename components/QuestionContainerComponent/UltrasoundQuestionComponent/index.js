import { useState, useEffect } from 'react';
import styles from './UltrasoundQuestionComponent.module.css'


 const UltrasoundQuestion =({nextPage, isPrevEnabled, isDoneEnabled, toAppendix}) => {
  
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
            Have you had a dense breast ultrasound?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              toAppendix();
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage();
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

export default UltrasoundQuestion;