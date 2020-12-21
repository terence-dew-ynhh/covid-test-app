import { useState, useEffect } from 'react';
import styles from './ExposureToCovidComponent.module.css';

const ExposureToCovidComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled
}) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isEmployee}>
          Your symptoms may be related to COVID-19 Vaccine Side Effects. You may
          continue working as scheduled, you do not need COVID-19 testing PCR
          testing right now.<br></br>
          <br></br>If you took yourself out of work due to these symptoms and
          your symptoms have improved or resolved, you may return to work, you
          do not require OCC-Health Clearance If your symptoms persist or worsen
          for more than 48 hours, contact the Call Center.”
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Have you had an exposure to a COVID-19 positive individual in the
            past 10 days?
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
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ExposureToCovidComponent;
