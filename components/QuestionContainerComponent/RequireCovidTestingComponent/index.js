import { useState, useEffect } from 'react';
import styles from './RequireCovidTestingComponent.module.css'


 const RequireCovidTesting =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      {/* <p className="error" hidden={isEmployee}>
      Follow up with your manager regarding any workplace exposure concerns and testing per guidance from Infection Prevention
        </p> */}
        <fieldset className="radio_grp_set">
          <legend>
          Why do you need COVID testing?:
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e)
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Having Symptoms?</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e,5)
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">Return from Travel to a High Risk Area?</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_exempt"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e,9)
            }}
          ></input>
          <label htmlFor="employee_staff_check_exempt">I have a COVID-19 Vaccine Exemption and I am Required for weekly COVID-19 testing</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default RequireCovidTesting;