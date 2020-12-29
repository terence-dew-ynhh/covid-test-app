import styles from './COVIDNegResultSympComponent.module.css';
import { useState, useEffect } from 'react';

const COVIDNegResultSympComponent = ({ isDoneEnabled, selectPathway }) => {
  const [hasConsent, setHasConsent] = useState('');

  const handleChecked = (e) => {
    selectPathway(6);
  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}>
        {' '}
        You chose this option because you had a negative COVID-19 test and out
        of work due to symptoms.{' '}
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
        {'Continue'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <p className="error">
            {' '}
            ATTENTION: You DO NOT NEED Occupational Health Clearance to return
            to work ONLY if the following applies to you: <br></br>
            <br></br>• You had a COVID-19 Vaccine dose in the past 48 hours AND
            <br></br>
            <br></br>• You developed ONLY vaccine side effects (fever, chills,
            muscle or joint aches, headaches, nausea, transient vomiting)
            lasting less than 48 hours AND<br></br>
            <br></br>• You were out of work due to the symptoms for less than 48
            hours<br></br>
            <br></br>
            If the above criteria do not apply to you and you still need
            clearance, please press Continue<br></br>
            <br></br>
          </p>
          <fieldset>
            <legend></legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default COVIDNegResultSympComponent;
