import styles from './SymptomsMessageComponent.module.css';
import { useState, useEffect } from 'react';

const SymptomsMessageComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  schedulePush
}) => {
  const [hasConsent, setHasConsent] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    if (
      e.target.id === 'prev_covid_none_of_the_above' &&
      e.target.checked === true
    ) {
      checkboxesArray.forEach((element) => {
        if (!(element === 'None_of_the_Above')) {
          let symtomsChk = document.getElementById(
            `prev_covid_${element.toLowerCase()}`
          );
          symtomsChk.checked = false;
          symtomsChk.disabled = true;
        }
      });
      isDoneEnabled(true);
    }
  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}>
        {' '}
        <b>Please Confirm You Agree to the Above:</b>
      </label>
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label
        className={styles.prev_none_label}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {'I Agree'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              <b>Return to Work Process AFTER your test result</b>
              <blockquote>
                <b>1.</b>Please remain out of work until your test result is
                available.
                <br></br>
                <br></br>
                <b>2.</b> If you have a <b>POSITIVE</b> test, remain out of work
                for a total of 7 days (day # 0 is your first day of symptoms).
                <br></br>
                <br></br>
                <b>3.</b> If you have a <b>NEGATIVE</b> test, you may return to
                work ONLY if you meet the following conditions for at least 24
                hours:
                <blockquote>
                  <b>a.</b> You DO NOT have fever (not on fever reducing
                  medicine), vomiting, or diarrhea AND
                  <b>b.</b> The following symptoms (if
                  present) are mild, improving, or have returned to baseline:
                  <blockquote>
                    <b>i.</b> Cough, body aches, fatigue, nausea, shortness of
                    breath, headaches, sore throat
                  </blockquote>
                </blockquote>
                <b>4.</b> If you have{' '}
                <b>been off work {'>'}3 days unrelated to COVID-19</b> and need
                clearance from Occupational Health, contact the Occupational
                Health Employee Resource Center at 844-543-2147, Option 2 and
                then again Option 2.
              </blockquote>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SymptomsMessageComponent;
