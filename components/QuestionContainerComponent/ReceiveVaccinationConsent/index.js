import { useState, useEffect } from 'react';
import styles from './ReceiveVaccinationConsent.module.css';
import veText from './vaccineelidgibility.json';

const ReceiveVaccinationConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  isSpanish
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  const handleChecked = (e) => {
    nextPage(e);
  };

  let VEText = isSpanish ? veText.sp : veText.en;

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}> {VEText[7]}</label>
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
        {VEText[8]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              {VEText[0]}
              <br></br>
              <br></br>
              {VEText[1]}
              <br></br>
              <br></br>
              {VEText[2]}
              <br></br>
              <br></br>
              {VEText[3]}
              <br></br>
              <br></br>
              {VEText[4]}
              <br></br>
              <br></br>
              {VEText[9]}
              {/* <br></br>
              <br></br>-I am a resident of CT or regularly receive clinical care
              in CT */}
              <br></br>
              <br></br>
              {VEText[5]}
              <br></br>
              <br></br>
              <b>{VEText[6]}</b>
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
