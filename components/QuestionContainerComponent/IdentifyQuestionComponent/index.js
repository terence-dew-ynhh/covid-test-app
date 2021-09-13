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
            id="student"
            type="radio"
            name="student"
            onClick={() => {
              nextPage();
              setIsStudent(true);
              updateIsStudent(true);
            }}
          ></input>
          <label htmlFor="student">
            Active Student/Student Worker/COOP/Graduate Assistant/Graduate
            Intern of CCSU
          </label>
          <br></br> <br></br>
          <input
            id="faculty"
            type="radio"
            name="faculty"
            onClick={() => {
              nextPage();
              setIsStudent(true);
              updateIsStudent(false);
            }}
          ></input>
          <label htmlFor="faculty">
            Active Faculty or Staff of CCSU
          </label>
          <br></br> <br></br>

          <input
            id="neither"
            type="radio"
            name="neither"
            onClick={() => {
              setIsStudent(false);
            }}
          ></input>
          <label htmlFor="neither">Neither</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default IdentifyQuestion;
