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
            Check your eligibility for Easy Care, please select one of the
            following:
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
          <label htmlFor="employee_staff_check_yes">
            I am Yale-New Haven Health System employee (full time, part time,
            or per diem, inclusive of employed medical staff and trainees).
          </label>
              <br></br>
              <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">
            I am not a Yale-New Haven Health System employee.
          </label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default EmployeeQuestion;
