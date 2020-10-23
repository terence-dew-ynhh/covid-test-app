import { useState, useEffect } from 'react';
import styles from './SymptomsStatementComponent.module.css'


 const SymptomsStatement =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
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
          Although COVID-19 testing may be indicated, please be aware of the following: Symptoms of fever, cough, body aches/myalgias may indicate the flu. Please contact your primary care provider for advice and/or treatment regarding this, especially if you age 65 years or older, have chronic medical conditions, and/or are pregnant.
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage()
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Continue</label>

        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default SymptomsStatement;