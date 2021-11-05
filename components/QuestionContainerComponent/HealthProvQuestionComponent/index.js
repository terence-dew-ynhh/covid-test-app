import { useState, useEffect } from 'react';
import styles from './HealthProvQuestionComponent.module.css';

const HealthProvQuestion = ({ nextPage, isPrevEnabled, isNextEnabled }) => {
  const [ishcordered, setIshcordered] = useState(false);

  useEffect(() => {
    isPrevEnabled(true);
    isNextEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        {ishcordered && (
          <p className="error">
            You are able to schedule this test in one of the following ways:
            <br></br>
            <br></br>
            1. MyChart{' '}
            <a
              href="https://mychart.ynhhs.org/MyChart-PRD/Authentication/Login?"
              target="_blank"
            >
              (MyChart - Login Page (ynhhs.org))
            </a>
            <br></br>
            <br></br>
            2. Call the COVID-19 Call Center at 833-ASK-YNHH (833-275-3644)
            <br></br>
            <br></br>
            3. Wait to receive a phone call from our scheduling team to schedule
            your test
          </p>
        )}
        <fieldset className="radio_grp_set">
          <legend>
            Has your doctor or healthcare provider ordered your testing?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIshcordered(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIshcordered(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default HealthProvQuestion;
