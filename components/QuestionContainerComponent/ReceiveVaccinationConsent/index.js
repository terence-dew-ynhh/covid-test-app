import { useState, useEffect } from 'react';
import styles from './ReceiveVaccinationConsent.module.css';

const ReceiveVaccinationConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    nextPage(e);
  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}>
        {' '}
        I declare that I am currently eligible to receive vaccine in the State
        of Connecticut.
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
        // className={styles.prev_none_label}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {'Agree'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              Only the following individuals are eligible to receive vaccine:
              <br></br>
              <br></br>- Healthcare personnel
              <br></br>
              <br></br>- Long-term care facility residents
              <br></br>
              <br></br>- Medical first responders
              <br></br>
              <br></br>By attending this clinic, you are attesting to meeting
              these eligibility requirements.
              <br></br>
              <br></br>If you are not eligible in the current phase, please let
              us know and you can reschedule your appointment once eligible.
              <br></br>
              <br></br>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ReceiveVaccinationConsent;
