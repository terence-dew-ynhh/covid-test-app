import { useState, useEffect } from 'react';
import styles from './IdentifyQuestionComponent.module.css';

const IdentifyQuestion = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateIsStudent
}) => {
  const [isStudent, setIsStudent] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isStudent}>
          Please call 860-832-1756 during normal business hours for assistance.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Please identify yourself in one of the following groups:
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsStudent(true);
              updateIsStudent(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">
            Active Student/Student Worker/COOP/Graduate Assistant/Graduate
            Intern of CCSU
          </label>
          <br></br> <br></br>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsStudent(true);
              updateIsStudent(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">
            Active Faculty or Staff of CCSU
          </label>
          <br></br> <br></br>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsStudent(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">Neither</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default IdentifyQuestion;
