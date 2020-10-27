import { useState, useEffect } from 'react';
import styles from './SymptomsStatementComponent.module.css';

const SymptomsStatement = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
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
            - COVID-19 testing is indicated <br></br><br></br>
            - Symptoms such as fever, cough or body aches may
            indicate the flu. <br></br><br></br>
            - Contact your primary care provider or Urgent Care for
            testing and medical regarding this, especially if you age 65
            years or older, have a chronic medical condition, and/or are
            pregnant.<br></br><br></br>
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Continue</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SymptomsStatement;
