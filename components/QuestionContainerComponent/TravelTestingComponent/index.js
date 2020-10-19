import { useState, useEffect } from 'react';
import styles from './TravelTestingComponent.module.css'


 const TravelTesting =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isEmployee}>
      You do not require COVID testing to return to work. You may continue to work and adhere to twice daily fever and symptoms monitoring. If symptoms or fever develop, DO NOT report to work and please revisit this Website or contact the OCC Health Call Center (203)-688-1700, option # 2.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Are you an employee or medical staff of Yale New Haven Health or Yale Medicine…?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(true);
              nextPage()
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default TravelTesting;