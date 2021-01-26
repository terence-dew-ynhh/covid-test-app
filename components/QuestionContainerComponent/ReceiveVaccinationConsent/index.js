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
    isPrevEnabled(false);
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
          I attest that I am a Connecticut resident or a patient of Yale New Health System, Northeast Medical Group or Yale Medicine who lives outside Connecticut and meet one of the following State of Connecticut eligibility criteria
:
              <br></br>
              <br></br>- 75 years of age or older
              <br></br>
              <br></br>- Healthcare personnel
              <br></br>
              <br></br>- Long-term care facility resident
              <br></br>
              <br></br>- Medical first responder
              {/* <br></br>
              <br></br>-I am a resident of CT or regularly receive clinical care
              in CT */}
              <br></br>
              <br></br>If you do not meet the criteria above, your appointment will be cancelled and you will not be allowed to enter a vaccination site.
              <br></br>
              <br></br>
              <b>
                Bring an ID (photo ID if possible) and wear a face mask or
                covering when visiting the vaccination site.
              </b>
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
