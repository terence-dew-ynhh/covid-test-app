import { useState, useEffect } from 'react';
import styles from './EmployeeQuestionComponent.module.css';

const EmployeeQuestion = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isEmployee}>
          Thank you for your interest in Easy Care, you are not eligible for
          this service at this time. If you need assistance finding care please
          call 833-ASK-YNHH (833-275-9644) or visit{' '}
          <a href="https://www.ynhhs.org/get-care-now" target={'_blank'}>
            Get Care Now (ynhhs.org)
          </a>
          .
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Please select a visit type
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">
          Sick Visit
          </label>
              <br></br>
              <br></br>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">
          Biometric Screening (including cholesterol and diabetes screening)   
          </label>
              <br></br>
              <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">
          Vaccine 
          </label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default EmployeeQuestion;
