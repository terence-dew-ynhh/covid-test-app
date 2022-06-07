import { useState, useEffect } from 'react';
import styles from './TestReasonComponent.module.css';

const TestReasonComponent = ({ nextPage, isPrevEnabled, isNextEnabled, hasSymptoms}) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isNextEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <fieldset className="radio_grp_set">
          <legend>Why do you need COVID Testing?</legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              hasSymptoms(true);
              nextPage(e,2);   
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Having Symptoms</label>
            <br></br>
            <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              hasSymptoms(false);
              nextPage();
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">
            {' '}
            I am not experiencing symptoms but need testing due to an exposure
            to COVID-19, travel, recreation or some other reason."
          </label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default TestReasonComponent;
