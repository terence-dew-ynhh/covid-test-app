import { useState, useEffect } from 'react';
import styles from './ListedConditionsConsent.module.css';
import lcText from './listedconditions.json';

const ListedConditionsConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  isSpanish
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    nextPage(e);
  };

  let checkboxesArray = ['None_of_the_Above'];

  let LCText = isSpanish ? lcText.sp : lcText.en

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}>
        {' '}
        {LCText[8]}
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
        {LCText[9]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
            {LCText[0]}
              <br></br>
              <br></br>{LCText[1]}
              <br></br>
              <br></br>{LCText[2]}
              <br></br>
              <br></br>{LCText[3]}
              <br></br>
              <br></br>{LCText[4]}
              <br></br>
              <br></br>{LCText[5]}
              <br></br>
              <br></br>
              <br></br>{LCText[6]}
              <br></br>
              <br></br>
              <b>{LCText[7]}</b>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ListedConditionsConsent;
