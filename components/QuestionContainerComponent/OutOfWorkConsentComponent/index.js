import styles from './OutOfWorkConsentComponent.module.css';
import { useState, useEffect } from 'react';

const OutOfWorkConsent = ({
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
      // setHasConsent('No');
      schedulePush(false);
    }

    // If any of the boxes are checked beside None of the Above
  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}>
        {''}
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
          <p className="error">
            - Symptoms such as fever, cough or body aches may indicate the flu.{' '}
            <br></br>
            <br></br>- Contact your primary care provider or Urgent Care for
            advice and/or treatment regarding this, especially if you age 65
            years or older, have a chronic medical condition, and/or are
            pregnant.<br></br>
            <br></br>
          </p>
          <p className="disclaimer">
            If you are at work, please ensure you are wearing a mask now, notify
            your supervisor and leave work. If you are home, stay home.
          </p>
          <fieldset>
            <legend>
              Once you have been tested, you must stay out of work for 48 or
              more hours or more pending the result and clearance from
              Occupational Health at the COVID-19 Call Center.
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default OutOfWorkConsent;
