import { useState, useEffect } from 'react';
import styles from './EmployeeQuestionComponent.module.css'

 const EmployeeQuestion =({nextPage, isPrevEnabled, isNextEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
    isNextEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>

      <p className="disclaimer">
            If you are at work, please ensure you are wearing a mask now, notify
            your supervisor and leave work. If you are home, stay home.
          </p>
          <fieldset>
            <p className="error">
            - Symptoms such as fever, cough or body aches may also indicate the flu.{' '}
            <br></br>
            <br></br>- We recommend contacting your primary care provider or Urgent Care for testing and medical advice regarding this, especially if you age 65
            years or older, have a chronic medical condition, and/or are
            pregnant.<br></br>
            <br></br>
          </p>

          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e, 1);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Continue</label>

          </fieldset>

      </div>

      <style jsx>{``}</style>
    </>
  );
}

export default EmployeeQuestion;