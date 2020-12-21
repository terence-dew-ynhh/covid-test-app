import { useState, useEffect } from 'react';
import styles from './VaccineDoseComponent.module.css';

const VaccineDoseComponent = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isEmployee}>
          Sorry, please navigate to a public testing website to schedule your
          test
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Did you receive a COVID-19 Vaccine Dose in the past 48 hours AND
            afterwards developed any of the following symptoms ONLY?
            <br></br> Fever (temp ≥ 38.0 degrees C / 100.0 degrees F)
            <br></br>
            <br></br>• Chills
            <br></br>
            <br></br>• Body aches (muscle or bone aches)
            <br></br>
            <br></br>• Headaches
            <br></br>
            <br></br>• Nausea
            <br></br>
            <br></br>• Vomiting
            <br></br>
            <br></br>• Diarrhea
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
            onClick={(e) => {
              nextPage(e, 2);
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

export default VaccineDoseComponent;
