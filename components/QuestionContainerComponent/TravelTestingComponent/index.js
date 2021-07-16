import { useState, useEffect } from 'react';
import styles from './TravelTestingComponent.module.css';

const TravelTesting = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isEmployee}>
          You do not require COVID testing to return to work. You may continue
          to work and adhere to twice daily fever and symptoms monitoring. If
          symptoms or fever develop, DO NOT report to work and please revisit
          this Website or contact the Employee Resource Center at (844)
          543-2147; Option # 2 for Occupational Health.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Did you complete your COVID vaccine (at least 2 weeks since the last
            vaccine dose) OR Have you tested positive for COVID-19 within the
            past 90 days?
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
            onClick={(e) => {
              nextPage(e, 1);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default TravelTesting;
