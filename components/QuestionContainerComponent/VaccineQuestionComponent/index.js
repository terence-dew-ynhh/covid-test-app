import { useState, useEffect } from 'react';
import styles from './VaccineQuestionComponent.module.css'


 const VaccineQuestionComponent =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isEmployee}>
         Flu Vaccine will be available in September 2021. More information to follow. 
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Which Vaccine are you scheduling for? 
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Covid-19 Vaccine</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">Influenza Vaccine</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default VaccineQuestionComponent;